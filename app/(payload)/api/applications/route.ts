import { NextRequest, NextResponse } from "next/server"
import { getPayload } from "payload"
import config from "@payload-config"

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config })

    const formData = await req.formData()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const about = formData.get("about") as string
    const vacancyId = formData.get("vacancyId") as string

    const resumeFile = formData.get("resume") as File | null

    let uploadedResume = null

    // UPLOAD RESUME
    if (resumeFile && resumeFile.size > 0) {
      uploadedResume = await payload.create({
        collection: "resumes",

        data: {
          candidateName: `${firstName} ${lastName}`,
          email,
        },

        file: {
          data: Buffer.from(
            await resumeFile.arrayBuffer()
          ),

          mimetype: resumeFile.type,
          name: resumeFile.name,
          size: resumeFile.size,
        },
      })
    }

    // CREATE APPLICATION
    const application = await payload.create({
      collection: "applications",

      data: {
        firstName,
        lastName,
        email,
        phone,
        about,

        vacancy: Number(vacancyId),

        resume: uploadedResume?.id || null,
      },
    })

    return NextResponse.json(application)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: "Ошибка сервера",
      },
      {
        status: 500,
      }
    )
  }
}
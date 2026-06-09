
import { NextRequest, NextResponse } from "next/server"

// GET /my-route/vacancy-api?id=<id> - Get vacancy by id
// GET /my-route/vacancy-api?slug=<slug> - Get vacancy by slug  
// GET /my-route/vacancy-api - List all vacancies
// POST /my-route/application-api - Create application

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const slug = searchParams.get("slug")

    if (id) {
      const vacancy = await prisma.vacancy.findUnique({
        where: { id },
      })

      if (!vacancy) {
        return NextResponse.json(
          { error: "Вакансия не найдена" },
          { status: 404 }
        )
      }

      return NextResponse.json(vacancy)
    }

    if (slug) {
      const vacancy = await prisma.vacancy.findUnique({
        where: { slug },
      })

      if (!vacancy) {
        return NextResponse.json(
          { error: "Вакансия не найдена" },
          { status: 404 }
        )
      }

      return NextResponse.json(vacancy)
    }

    // List all vacancies
    const vacancies = await prisma.vacancy.findMany({
      orderBy: { publishDate: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        employmentType: true,
        department: true,
        location: true,
        salary: true,
        publishDate: true,
      },
    })

    return NextResponse.json(vacancies)
  } catch (error) {
    console.error("Vacancy API error:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      vacancyId,
      surname,
      name,
      phone,
      email,
      resume,
      message,
    } = body

    // Validate input
    if (!vacancyId || !surname || !name || !phone || !email) {
      return NextResponse.json(
        { error: "Отсутствуют обязательные поля" },
        { status: 400 }
      )
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Некорректный email" },
        { status: 400 }
      )
    }

    // Check if vacancy exists
    const vacancy = await prisma.vacancy.findUnique({
      where: { id: vacancyId },
      select: { id: true },
    })

    if (!vacancy) {
      return NextResponse.json(
        { error: "Вакансия не найдена" },
        { status: 404 }
      )
    }

    // Create application
    const application = await prisma.application.create({
      data: {
        vacancyId,
        surname,
        name,
        phone,
        email,
        resume: resume || "",
        message: message || "",
      },
      select: {
        id: true,
        createdAt: true,
      },
    })

    return NextResponse.json(application)
  } catch (error) {
    console.error("Application API error:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}


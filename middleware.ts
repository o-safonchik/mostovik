import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
  const username = process.env.SITE_USERNAME
  const password = process.env.SITE_PASSWORD

  const authorization = request.headers.get("authorization")

  if (authorization) {
    const [, encoded] = authorization.split(" ")

    const decoded = Buffer.from(encoded, "base64").toString()

    const [user, pass] = decoded.split(":")

    if (user === username && pass === password) {
      return NextResponse.next()
    }
  }

  return new NextResponse("Требуется авторизация", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Private Website"',
    },
  })
}

export const config = {
  matcher: [
    /*
      Защищаем всё,
      кроме:
      - админки Payload
      - API
      - Next.js
      - favicon
      - robots
      - sitemap
    */
    "/((?!admin|api|_next|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
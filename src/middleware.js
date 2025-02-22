import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

// use middleware for protected routes
export const middleware = async (req) => {

    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === "production" ? true : false,
    })

    if (token) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/login', req.url))
    }

}

export const config = {
    matcher: [
        '/my-order',
        '/my-order/:path*',
        "/checkout/:path*"
    ],
}
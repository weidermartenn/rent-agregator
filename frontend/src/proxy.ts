import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const token = request.cookies.get('accessToken')?.value;

    if (token && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!token && request.nextUrl.pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = { 
    matcher: [
        '/login/:path*',
        '/profile/:path*',
    ] 
};
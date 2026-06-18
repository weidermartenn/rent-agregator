import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email, code } = await req.json();

    const res = await fetch(`${process.env.BACKEND_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
    });

    if (!res.ok) return NextResponse.json("Не удалось подтвердить код", { status: 401 });

    const data = await res.json();

    const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;

    const response = NextResponse.json({ expiresAt })

    response.cookies.set('accessToken', data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    })

    return response
}
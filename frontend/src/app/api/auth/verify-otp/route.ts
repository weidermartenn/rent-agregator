import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email, code } = await req.json();

    console.log('BACKEND_URL:', process.env.BACKEND_URL);
  console.log('email:', email, 'code:', code);

    const res = await fetch(`${process.env.BACKEND_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
    });

    if (!res.ok) return NextResponse.json("Не удалось подтвердить код", { status: 401 });

    console.log('NestJS response status:', res.status);
    const data = await res.json();
    console.log('NestJS response data:', data);

    const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;

    const response = NextResponse.json({ expiresAt })

    response.cookies.set('accessToken', data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    })

    console.log('Cookie set, returning response');

    return response
}
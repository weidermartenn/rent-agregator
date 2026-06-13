import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = req.cookies.get('accessToken')?.value;

    if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` }
    })

    if (!res.ok) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const user = await res.json();

    const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;

    return NextResponse.json({ user, expiresAt });
}
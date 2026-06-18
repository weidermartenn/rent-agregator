'use server';
import { cookies } from "next/headers";

export async function deleteAuthCookies() {
    const cookie = await cookies();
    cookie.delete('accessToken');
}
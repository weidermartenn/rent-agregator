import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(req: NextRequest) {
    
    return NextResponse.redirect(new URL('/', req.url))
}
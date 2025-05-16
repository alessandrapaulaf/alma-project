import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (email === "admin@alma.com" && password === "12345678") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const cookieStore = await cookies();
  cookieStore.set("token", new Date().getTime().toString(), {
    maxAge: 60 * 60 * 24,
  });

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

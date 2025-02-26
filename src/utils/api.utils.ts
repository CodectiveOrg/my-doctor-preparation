import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

import { ApiResponseType } from "@/types/api-response.type";

type Result<T> = [error: null, data: T] | [error: string, data: null];

export async function parseBody<T>(request: Request): Promise<Result<T>> {
  try {
    const body = await request.json();
    return [null, body];
  } catch (e) {
    if (e instanceof Error) {
      return [e.message, null];
    }

    if (typeof e === "string") {
      return [e, null];
    }

    return ["Unknown error", null];
  }
}

export async function wrapWithTryCatch<T>(
  callback: () => Promise<ApiResponseType<T>>,
): Promise<ApiResponseType<T>> {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "یه چی شد ولی نمیدونم چی." },
      { status: 500 },
    );
  }
}

export function setAuthCookie(): void {
  const cookieStore = cookies();

  const payload = {};

  const token = jwt.sign(payload, process.env.TOKEN_SECRET!, {
    expiresIn: "3d",
  });

  cookieStore.set(process.env.TOKEN_KEY!, token, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 3 * 24 * 3600 * 1000,
  });
}

export function isLoggedIn(request: NextRequest): boolean {
  const token = request.cookies.get(process.env.TOKEN_KEY!)?.value;

  if (!token) {
    return false;
  }

  try {
    return !!jwt.verify(token, process.env.TOKEN_SECRET!);
  } catch {
    return false;
  }
}

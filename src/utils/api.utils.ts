import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import * as jose from "jose";

import bcrypt from "bcrypt";

import { ApiResponseType } from "@/types/api-response.type";

type Result<T> = [error: null, data: T] | [error: string, data: null];

const alg = "HS256";
const secret = new TextEncoder().encode(process.env.TOKEN_SECRET!);

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

export async function setAuthCookie(): Promise<void> {
  const cookieStore = cookies();

  const token = await new jose.SignJWT()
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("3d")
    .sign(secret);

  cookieStore.set(process.env.TOKEN_KEY!, token, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 3 * 24 * 3600,
  });
}

export function removeAuthCookie(): void {
  const cookieStore = cookies();
  cookieStore.delete(process.env.TOKEN_KEY!);
}

export async function isLoggedIn(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(process.env.TOKEN_KEY!)?.value;

  if (!token) {
    return false;
  }

  try {
    await jose.jwtVerify(token, secret);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (
  password: string,
  hashed: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashed);
};

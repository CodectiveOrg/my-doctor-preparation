import { NextResponse } from "next/server";

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

import { NextResponse } from "next/server";

import { ApiResponseType } from "@/types/api-response.type";

import { removeAuthCookie, wrapWithTryCatch } from "@/utils/api.utils";

export async function POST(): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    removeAuthCookie();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}

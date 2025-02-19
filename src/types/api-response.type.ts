import { NextResponse } from "next/server";

export type ApiResponseType<TData> = NextResponse<
  { data: TData } | { error: string }
>;

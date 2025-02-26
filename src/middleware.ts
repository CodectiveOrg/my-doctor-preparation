import { NextRequest } from "next/server";

import { isLoggedIn } from "@/utils/api.utils";

const onlyLoggedInRoutes = ["/dashboard"];
const onlyNotLoggedInRoutes = ["/auth/sign-up", "/auth/sign-in"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isOnlyLoggedInRoute = onlyLoggedInRoutes.includes(path);
  const isOnlyNotLoggedInRoute = onlyNotLoggedInRoutes.includes(path);

  if (isLoggedIn(request)) {
    if (isOnlyLoggedInRoute && !path.startsWith("/auth/sign-in")) {
      return Response.redirect(new URL("/auth/sign-in", request.url));
    }
  } else {
    if (isOnlyNotLoggedInRoute && !path.startsWith("/dashboard")) {
      return Response.redirect(new URL("/dashboard", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

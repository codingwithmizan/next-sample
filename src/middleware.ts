import { NextResponse, type NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  return NextResponse.redirect(new URL("/", req.url));
};

export const config = {
  matcher: "/profile",
};

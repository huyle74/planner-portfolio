import { NextResponse } from "next/server";
import { AuthLogin } from "@/app/ultility/login";

export const POST = async (req: Request) => {
  const { username, password } = await req.json();

  const res = await AuthLogin(username, password);

  if (res?.success) {
    return NextResponse.json(res);
  }

  return NextResponse.json(res, { status: 401 });
};

"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

const SECRET: string | any = process.env.SECRET_KEY;

export const VerifyToken = async () => {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("access_token")?.value || "";

    if (!token) {
      console.log("No token found in cookies");
    }
    const decode = jwt.verify(token, SECRET);

    if (!decode) {
      console.log("Invalid token");
    }
    return decode;
  } catch (error: any) {
    console.log("Token verification failed:", error.message);
  }
};

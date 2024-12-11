"use server";

import { cookies } from "next/headers";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.LOGIN_URL;
const username = process.env.USER;
const password = process.env.PASSWORD;

export const AuthLogin = async (user: string, pass: string) => {
  try {
    if (user !== username || pass !== password) {
      console.log("Wrong username or Password");
      return;
    } else {
      const cookieStorage = cookies();

      const response = await axios.post(`${url}/login`, {
        username: user,
        password: pass,
      });
      const token = response.data.access_token;

      (await cookieStorage).set("access_token", token);

      return { success: true, redirect: "/admin" };
    }
  } catch (error) {
    console.log(error);
  }
};

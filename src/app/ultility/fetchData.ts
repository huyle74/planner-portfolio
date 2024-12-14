"use server";

import axios from "axios";
import dotenv from "dotenv";
import { cookies } from "next/headers";
dotenv.config();

const api_url = process.env.API_URL;

export const mysqlData = async () => {
  try {
    console.log(api_url);
    const cookieStorage = cookies();
    const token = (await cookieStorage).get("access_token");

    const res = await axios.get(`${api_url}`, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    });
    if (!res) {
      throw new Error(`HTTP error! status: ${res}`);
    }

    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const mysqlDataForMainPage = async () => {
  try {
    const res = await axios.get(`${api_url}`);
    if (!res) {
      throw new Error(`HTTP error! status: ${res}`);
    }

    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const findPortfolio = async (id: string | number) => {
  const data = await mysqlData();
  const result = data.find((dt: any) => dt.id === Number(id));
  return result;
};

export const deletePort = async (id: string | number) => {
  try {
    await axios.delete(`${api_url}/${id}`);
  } catch (err: any) {
    console.log(err.response);
  }
};

export const updatePort = async (id: string, formData: FormData) => {
  try {
    await axios.patch(`${api_url}/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error: any) {
    console.log(error.response);
  }
};

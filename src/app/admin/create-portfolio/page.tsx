"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

import HeaderAdmin from "../admin-component/header-admin";
import BodyCreateAdmin from "./create-component/bodyCreate";
import { VerifyToken } from "@/app/ultility/verifyToken";
import { adminPage_config } from "@/app/ultility/style-component";

export default function CreatePort() {
  const router = useRouter();

  useEffect(() => {
    const guard = async () => {
      const res = await VerifyToken();
      if (!res) {
        router.push("/login");
      }
    };
    guard();
  }, []);

  return (
    <Box sx={{ ...adminPage_config, height: "100%" }}>
      <HeaderAdmin port={false} create={true} />
      <BodyCreateAdmin />
    </Box>
  );
}

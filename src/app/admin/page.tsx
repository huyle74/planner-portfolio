"use client";

import { useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

import HeaderAdmin from "./admin-component/header-admin";
import BodyAdmin from "./admin-component/body-admin";
import { adminPage_config } from "@/app/ultility/style-component";
import { VerifyToken } from "../ultility/verifyToken";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const guardAdmin = async () => {
      const res = await VerifyToken();
      if (!res) {
        router.push("/login");
      }
    };
    guardAdmin();
  }, []);

  return (
    <Box sx={{ ...adminPage_config }}>
      <HeaderAdmin port={true} create={false} />
      <BodyAdmin />
    </Box>
  );
}

"use client";

import { Box } from "@mui/material";

import HeaderAdmin from "../admin-component/header-admin";
import BodyCreateAdmin from "./create-component/bodyCreate";
import { adminPage_config } from "@/app/ultility/style-component";

export default function CreatePort() {
  return (
    <Box sx={{ ...adminPage_config, height: "100%" }}>
      <HeaderAdmin port={false} create={true} />
      <BodyCreateAdmin />
    </Box>
  );
}



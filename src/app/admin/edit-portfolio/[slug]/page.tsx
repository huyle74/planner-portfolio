"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { findPortfolio } from "@/app/ultility/fetchData";
import HeaderAdmin from "../../admin-component/header-admin";
import BodyEditAdmin from "../edit-component/editBody";
import { adminPage_config } from "@/app/ultility/style-component";

export default function EditPortfolio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params),
    [dataPort, setDataPort] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await findPortfolio(slug);
      setDataPort(res);
    };
    if (dataPort.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <Box sx={{ ...adminPage_config, height: "100%" }}>
      <HeaderAdmin port={false} create={false} />
      <BodyEditAdmin data={dataPort} slug={slug} />
    </Box>
  );
}

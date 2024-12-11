"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import View from "@/components/view";
import { findPortfolio } from "../../ultility/fetchData";

const ViewPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (data.length === 0) {
        const res = await findPortfolio(slug);
        setData(res);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <View data={data} />
    </Box>
  );
};

export default ViewPage;

"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import View from "@/components/view";
import { findPortfolio } from "../../ultility/fetchData";

const ViewPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (data.length === 0) {
        try {
          const slug = (await params).slug;
          const result = await findPortfolio(slug);
          setData(result);
        } catch (error) {
          console.error("Error fetching portfolio data:", error);
        }
      }
    };
    fetchData();
  }, [params]);

  return (
    <Box>
      <View data={data} />
    </Box>
  );
};

export default ViewPage;

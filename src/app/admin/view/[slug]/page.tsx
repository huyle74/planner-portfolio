import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import View from "@/components/view";
import { findPortfolio } from "@/app/ultility/fetchData";

export default function ViewPort({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const [port, setPort] = useState<any>([]);

  useEffect(() => {
    if (port.length === 0) {
      const fetchData = () => {
        const res = findPortfolio(slug);
        setPort(res);
      };
      fetchData();
    }
  }, []);

  return (
    <Box>
      <View data={port} />
    </Box>
  );
}

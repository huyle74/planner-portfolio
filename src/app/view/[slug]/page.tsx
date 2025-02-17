"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import View from "@/components/view";
import { data } from "../../ultility/dataForGallery";

const ViewPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [dataToDisplay, setDataToDisplay] = useState<any>([]);

  useEffect(() => {
    try {
      const slug = params.slug;
      const result = data.find((dt: any) => {
        return dt.id === Number(slug);
      });
      console.log(result);
      setDataToDisplay(result);
    } catch (error) {
      console.log("Portfolio Not found >> ", error);
    }
  }, [params]);

  return (
    <Box>
      <View data={dataToDisplay} />
    </Box>
  );
};

export default ViewPage;

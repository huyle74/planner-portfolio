import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import Header from "./header";
import Body from "./body";
import { mysqlData } from "@/app/ultility/fetchData";

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await mysqlData();
      return setData(res);
    };
    if (data.length === 0) {
      fetchData();
    }
  }, []);
  return (
    <Box
      sx={{ height: "fit-content", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Body data={data} />
    </Box>
  );
}

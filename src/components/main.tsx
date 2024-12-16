import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import Header from "./header";
import Body from "./body";
import Footer from "./body-component/footer";
import { flexBox_Config } from "@/app/ultility/style-component";
import { mysqlDataForMainPage } from "@/app/ultility/fetchData";

export default function Main() {
  const [data, setData] = useState([]),
    [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }

    const fetchData = async () => {
      const res = await mysqlDataForMainPage();
      return setData(res);
    };
    if (data.length === 0) {
      fetchData();
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          height: mobile ? "" : "100vh",
          ...flexBox_Config,
          alignItems: mobile ? "" : "stretch",
          position: "relative",
        }}
        className="body_mainPage"
      >
        <Box
          sx={{
            ...flexBox_Config,
            flexGrow: 9,
          }}
        >
          <Body data={data} mobile={mobile} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Footer mobile={mobile} />
        </Box>
      </Box>
    </Box>
  );
}

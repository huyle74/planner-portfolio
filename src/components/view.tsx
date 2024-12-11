import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";

import { flexBox_Config } from "@/app/ultility/style-component";
import ViewHeader from "./view-component/view-header";
import ViewImage from "./view-component/view-image";
import ViewBody from "./view-component/view-body";
import ViewFooter from "./view-component/view-footer";

type Portfolio = {
  title: string;
  uploadFile: string;
};

type ChildProps = {
  data: Portfolio;
};

const View: React.FC<ChildProps> = ({ data }) => {
  const [view, setView] = useState(false);

  const handleClickCView = () => {
    if (view) {
      setView(false);
    } else {
      setView(true);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        ...flexBox_Config,
        height: "100%",
      }}
    >
      {view ? (
        <Box sx={{ width: "100%" }}>
          <ViewImage imageUrl={data.uploadFile} onClick={handleClickCView} />
        </Box>
      ) : (
        <Box sx={{ width: "100%" }}>
          <ViewHeader data={data} onClick={handleClickCView} />
          <ViewBody data={data} />
          <ViewFooter />
        </Box>
      )}
    </Box>
  );
};

export default View;

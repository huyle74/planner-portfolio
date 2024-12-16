"use client";

import { Box, Button, IconButton } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ClearIcon from "@mui/icons-material/Clear";
import { flexBox_Config } from "@/app/ultility/style-component";

type Data = {
  title: string;
  uploadFile: string;
};

type ChildProps = {
  data: Data;
  onClick: () => void;
  mobile: boolean;
};
const ViewHeader: React.FC<ChildProps> = ({ data, onClick, mobile }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          right: "2%",
          top: "1%",
          color: "black",
        }}
        href="/"
      >
        <ClearIcon fontSize="inherit" />
      </IconButton>
      <Box sx={{ p: 4, mb: 4, ml: mobile ? 1 : 4 }}>
        <h1 style={{ fontSize: "3rem" }}>{data.title}</h1>
        <p style={{ fontSize: "1rem", marginTop: "10px" }}>Huyen Vo</p>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          p: mobile ? 2 : 10,
          ...flexBox_Config,
          pt: mobile ? 20 : 10,
          pb: mobile ? 20 : 10,
        }}
      >
        <img
          src={data.uploadFile}
          alt="Image"
          style={{
            width: mobile ? "100%" : "80%",
            height: mobile ? "auto" : "70vh",
            objectFit: "cover",
          }}
          onClick={onClick}
        />
      </Box>

      <Button
        variant="outlined"
        sx={{
          height: "40px",
          color: "black",
          border: "1px black solid",
          borderRadius: "20px",
          ml: mobile ? "3%" : "10%",
          mt: mobile ? "3%" : "1%",
          mb: "1%",
        }}
        endIcon={<FullscreenIcon />}
        onClick={onClick}
      >
        Full Screen
      </Button>
    </Box>
  );
};

export default ViewHeader;

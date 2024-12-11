import { Box, Button } from "@mui/material";

import { flexBox_Config } from "@/app/ultility/style-component";

export default function ViewFooter() {
  return (
    <Box
      sx={{
        backgroundColor: "#2e2e2e",
        color: "white",
        ...flexBox_Config,
        pt: 3,
        pb: 6,
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: 1000 }}>Let's Start</h1>
      <Box
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          mt: 4,
          mb: 4,
          fontSize: "2rem",
          fontWeight: 800,
        }}
      >
        <a
          className="footer-email-contact"
          style={{
            borderBottom: "1px white solid",
            paddingBottom: "10px",
          }}
        >
          huyenvo@gmail.com
        </a>
      </Box>
    </Box>
  );
}

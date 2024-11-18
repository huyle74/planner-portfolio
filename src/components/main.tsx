import { Box } from "@mui/material";
import gsap from "gsap";

import Header from "./header";
import Body from "./body";

export default function Main() {
  return (
    <Box
      sx={{ height: "fit-content", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Body />
    </Box>
  );
}

import { Box } from "@mui/material";

import Footer from "./body-component/footer";
import About from "./body-component/about";
import Contact from "./body-component/contact";
import Portfolio from "./body-component/portfolio";

import { flexBox_Config } from "@/app/ultility/style-component";

export default function Body() {
  return (
    <Box
      sx={{
        height: "100vh",
        // border: "1px blue solid",
        position: "relative",
        ...flexBox_Config,
      }}
      className="body-container"
    >
      <Box
        sx={{
          height: "100%",
          // border: "1px blue solid",
          ...flexBox_Config,
        }}
      >
        <Box
          sx={{
            height: "fit-content",
            ...flexBox_Config,
          }}
        >
          <About />
          <Portfolio />
          <Contact />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

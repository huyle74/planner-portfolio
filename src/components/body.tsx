import { Box } from "@mui/material";

import About from "./body-component/about";
import Contact from "./body-component/contact";
import Portfolio from "./body-component/portfolio";

import { flexBox_Config } from "@/app/ultility/style-component";

type ChildProps = {
  data: any[];
  mobile: boolean;
};

const Body: React.FC<ChildProps> = ({ data, mobile }) => {
  return (
    <Box
      sx={{
        ...flexBox_Config,
        mt: mobile ? 10 : "",
      }}
      className="body-container"
    >
      <About mobile={mobile} />
      <Portfolio data={data} mobile={mobile} />
      <Contact mobile={mobile} />
    </Box>
  );
};

export default Body;

import { Box } from "@mui/material";

type Data = {
  background: string;
  creative: string;
  idea: string;
  execution: string;
  strategy: string;
};

type ChildProps = {
  data: Data | any;
};

const ViewOVerview: React.FC<ChildProps> = ({ data }) => {
  const styleContainer = {
      mt: 4,
      mb: 4,
    },
    styleContent = {
      marginTop: "10px",
      whiteSpace: "pre-line",
      lineHeight:'20px'
    };

  return (
    <Box sx={{ width: "100%" }}>
      <h1 style={{ fontSize: "2.5rem" }}>OVERVIEW</h1>
      <Box sx={{ ...styleContainer }}>
        <h2>BACKGROUND</h2>
        <p style={{ ...styleContent }}>{data.background}</p>
      </Box>
      <Box sx={{ ...styleContainer }}>
        <h2>Describe the creative idea</h2>
        <p style={{ ...styleContent }}>{data.creative}</p>
      </Box>
      <Box sx={{ ...styleContainer }}>
        <h2>Describe the strategy</h2>
        <p style={{ ...styleContent }}>{data.strategy}</p>
      </Box>
      <Box sx={{ ...styleContainer }}>
        <h2>Describe the execution</h2>
        <p style={{ ...styleContent }}>{data.execution}</p>
      </Box>
    </Box>
  );
};
export default ViewOVerview;

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
};
const ViewHeader: React.FC<ChildProps> = ({ data, onClick }) => {
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
      <Box sx={{ p: 4, mb: 4, ml: 4 }}>
        <h1 style={{ fontSize: "3rem" }}>{data.title}</h1>
        <p style={{ fontSize: "1rem", marginTop: "10px" }}>Huyen Vo</p>
      </Box>
      <Box sx={{ backgroundColor: "black", p: 10, ...flexBox_Config }}>
        <img
          src={data.uploadFile}
          alt="Image"
          style={{
            width: "80%",
            height: "70vh",
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
          ml: "10%",
          mt: "1%",
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

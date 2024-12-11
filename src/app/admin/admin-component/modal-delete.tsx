import { Box, Button } from "@mui/material";

import { flexBox_Config } from "@/app/ultility/style-component";

type ChildProps = {
  confirm: () => void;
  cancel: () => void;
};

const ModalDelete: React.FC<ChildProps> = ({ confirm, cancel }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "max-content",
    backgroundColor: "black",
    ...flexBox_Config,
    p: 3,
    color: "white",
    borderRadius: "10px",
  };

  const styleButton = {
    color: "black",
    backgroundColor: "white",
    transition: "0.5s ease",
    mt: 2,
    "&:hover": {
      backgroundImage:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    },
  };

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100vw",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5);",
        top: 0,
        left: 0,
      }}
    >
      <Box sx={style}>
        <img
          src="https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/646341573a0b4fac8bf02fc7_18.png"
          alt="sad emoji"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "30%",
            height: "auto",
            transform: "translateY(-100%)",
          }}
        />
        <p>Are you sure to delete this Portfolio?</p>
        <Box>
          <Button variant="contained" sx={styleButton} onClick={confirm}>
            Yes
          </Button>
          <Button
            variant="contained"
            sx={{ ...styleButton, ml: 2 }}
            onClick={cancel}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ModalDelete;

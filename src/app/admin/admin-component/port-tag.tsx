import { forwardRef } from "react";

import {
  Box,
  Button,
  styled,
  ButtonGroup,
  IconButton,
  Tooltip,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { flexBox_Config } from "@/app/ultility/style-component";

type ChildProps = {
  image: string;
  title: string;
  id: number;
  openModal: (id: number) => void;
};

export interface PortRef {
  portRef: number;
}

const StyledButton = styled(Button)({
  color: "white",
  backgroundColor: "#FFC300",
});

const PortTag = forwardRef<PortRef, ChildProps>(
  ({ image, title, id, openModal }, ref) => {
    return (
      <Box
        sx={{
          ...flexBox_Config,
          m: 3,
          position: "relative",
          height: "250px",
          width: "100%",
          border: "1px black solid",
          justifyContent: "space-between",
          borderRadius: "10px",
          p: 2,
        }}
      >
        <Tooltip title="Delete" placement="right">
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "white",
              transition: "0.3s ease",
              "&:hover": {
                transform: "rotate(90deg)",
              },
            }}
            onClick={() => openModal(id)}
          >
            <ClearIcon />
          </IconButton>
        </Tooltip>
        <img
          src={image}
          alt="image"
          style={{ objectFit: "cover", height: "50%", width: "100%" }}
        />
        <p style={{ textAlign: "center" }}>{title}</p>
        <ButtonGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <StyledButton variant="contained" href="/admin">
            View
          </StyledButton>
          <StyledButton
            variant="contained"
            href={`/admin/edit-portfolio/${id}`}
          >
            Edit
          </StyledButton>
        </ButtonGroup>
      </Box>
    );
  }
);
export default PortTag;

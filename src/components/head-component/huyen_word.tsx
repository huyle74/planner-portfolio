import { ForwardedRef, forwardRef } from "react";
import { Box } from "@mui/material";

const Huyen_word = forwardRef(function Huyen(
  props: object,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Box
      sx={{
        margin: "auto",
        overflow: "hidden",
        // border: "1px blue solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "180px",
          fontWeight: 900,
          transform: "translateY(50%)",
        }}
        ref={ref}
        id="huyen-word"
      >
        HUYEN
      </p>
    </Box>
  );
});
export default Huyen_word;

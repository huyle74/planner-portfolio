import { ForwardedRef, forwardRef } from "react";
import { Box } from "@mui/material";

interface Mobile {
  mobile: boolean;
}

const Huyen_word = forwardRef<HTMLDivElement, Mobile>(function Huyen(
  { mobile }: Mobile,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Box
      sx={{
        margin: "auto",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: mobile ? "5rem" : "10.5rem",
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

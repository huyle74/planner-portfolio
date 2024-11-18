export const hoverBox_body: object = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  // height: "100%",
  p: 3,
  "&:hover": {
    backgroundColor: "white",
  },
  "&:not(:hover)": {
    transition: "all 2s",
    backgroundColor: "transparent",
  },
};

export const flexBox_Config: object = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

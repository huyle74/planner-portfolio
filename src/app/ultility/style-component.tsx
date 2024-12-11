export const hoverBox_body: object = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
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

export const adminPage_config = {
  // height: "100vh",
  backgroundColor: "white",
  color: "black",
};

export const adminPage_current = {
  color: "yellow",
  border: "yellow 1px solid",
};

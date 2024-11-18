import { Box } from "@mui/material";
import { flexBox_Config } from "@/app/ultility/style-component";

export default function Footer() {
  return (
    <Box
      sx={{
        ...flexBox_Config,
        // border: "1px black solid",
        width: "100%",
        alignSelf: "end",
        marginTop: "auto",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <a
          href="#LinkedIn"
          style={{ width: "2em", height: "auto", margin: "8px" }}
          className="social-icon"
        >
          <img
            src=" https://cdn.prod.website-files.com/5b444bb7049e8677b6ae771a/60d3419dcc94a7ecb70872ca_Asset%202.svg"
            alt="LinkedIn contact link"
          />
        </a>
        <a
          href="#instagram"
          style={{ width: "2em", height: "auto", margin: "8px" }}
          className="social-icon"
        >
          <img
            src="https://cdn.prod.website-files.com/5b444bb7049e8677b6ae771a/60d3419d8aba9ed79032d8d0_Asset%201.svg"
            alt="Instagram Link"
          />
        </a>
      </Box>
      <p
        style={{ fontSize: "15px", marginTop: "2em", paddingBottom: "2em" }}
        className="name-footer"
      >
        Huyen Vo 2024
      </p>
    </Box>
  );
}

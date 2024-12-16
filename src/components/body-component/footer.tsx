import { Box } from "@mui/material";

type ChildProps = {
  mobile: boolean;
};

const Footer: React.FC<ChildProps> = ({ mobile }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <a
          href="#LinkedIn"
          style={{
            margin: "8px",
          }}
          className="social-icon"
        >
          <img
            src=" https://cdn.prod.website-files.com/5b444bb7049e8677b6ae771a/60d3419dcc94a7ecb70872ca_Asset%202.svg"
            alt="LinkedIn contact link"
          />
        </a>
        <a
          href="#instagram"
          style={{
            margin: "8px",
          }}
          className="social-icon"
        >
          <img
            src="https://cdn.prod.website-files.com/5b444bb7049e8677b6ae771a/60d3419d8aba9ed79032d8d0_Asset%201.svg"
            alt="Instagram Link"
          />
        </a>
      </Box>
      <p
        style={{
          fontSize: "15px",
          paddingBottom: "2em",
          textAlign: "center",
        }}
        className="name-footer"
      >
        Huyen Vo 2024
      </p>
    </Box>
  );
};

export default Footer;

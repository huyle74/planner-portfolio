import { forwardRef } from "react";
import { Box } from "@mui/material";

import { gallery_display } from "@/app/public/data";

interface PortGalleryProps {
  onMouseMove: () => any;
}

const PortGallery = forwardRef<HTMLDivElement, PortGalleryProps>(
  function gallery({ onMouseMove }, ref) {
    return (
      <Box
        ref={ref}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: 0,
          height: 0,
          opacity: 0,
        }}
        onMouseMove={onMouseMove}
      >
        {gallery_display.map((data, index) => (
          <a
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              margin: "24px",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
            }}
            key={index}
            className="portfolio-project"
            href="#"
          >
            <img src={data.image} alt={data.title} className="moving-image" />
            <Box
              component="p"
              sx={{
                fontSize: "25px",
                color: "white",
                position: "absolute",
                top: "45%",
                fontWeight: 700,
                height: 0,
              }}
              className="port-title"
            >
              {data.title}
            </Box>
          </a>
        ))}
      </Box>
    );
  }
);

export default PortGallery;

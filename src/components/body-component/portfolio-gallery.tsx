import { forwardRef } from "react";
import { Box } from "@mui/material";

type PortGalleryProps = {
  data: any[];
};

const PortGallery = forwardRef<HTMLDivElement, PortGalleryProps>(
  function gallery({ data }, ref) {
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
        // onMouseMove={onMouseMove}
      >
        {data.map((dt, index) => (
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
            href={`/view/${dt.id}`}
          >
            <img src={dt.uploadFile} alt={dt.title} className="moving-image" />
            <Box
              component="p"
              sx={{
                fontSize: "25px",
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                fontWeight: 700,
                width: "100%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
              className="port-title"
            >
              {dt.title}
            </Box>
          </a>
        ))}
      </Box>
    );
  }
);

export default PortGallery;

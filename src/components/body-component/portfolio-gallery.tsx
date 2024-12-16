import { forwardRef } from "react";
import { Box, Grid2 } from "@mui/material";

type PortGalleryProps = {
  data: any[];
  mobile: boolean;
};

const PortGallery = forwardRef<HTMLDivElement, PortGalleryProps>(
  function gallery({ data, mobile }, ref) {
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
      >
        {mobile ? (
          <Grid2 container spacing={1}>
            {data.map((dt, index) => {
              return (
                <Grid2 size={4} key={index}>
                  <a
                    style={{
                      position: "relative",
                      height: 0,
                      width: "100%",
                      zIndex: 1000,
                      display: "flex",
                      justifyContent: "center",
                    }}
                    key={index}
                    className="portfolio-project"
                    href={`/view/${dt.id}`}
                  > 
                    <img
                      src={dt.uploadFile}
                      alt={dt.title}
                      style={{
                        opacity: 1,
                        objectFit: "cover",
                        width: "30vw",
                        height: "auto",
                      }}
                    />
                    <Box
                      component="p"
                      sx={{
                        fontSize: "15px",
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
                </Grid2>
              );
            })}
          </Grid2>
        ) : (
          data.map((dt, index) => (
            <a
              style={{
                position: "relative",
                height: 0,
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
              <img
                src={dt.uploadFile}
                alt={dt.title}
                className="moving-image"
              />
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
          ))
        )}
      </Box>
    );
  }
);

export default PortGallery;

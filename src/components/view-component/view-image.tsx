"use client";

import { useState, useEffect, useRef } from "react";

import Draggable from "react-draggable";
import { Box, IconButton, Slider, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import gsap from "gsap";

import { flexBox_Config } from "@/app/ultility/style-component";

type ChildProps = {
  onClick: () => void;
  imageUrl: string;
  mobile: boolean;
};

const ViewImage: React.FC<ChildProps> = ({ onClick, imageUrl, mobile }) => {
  const [drag, setDrag] = useState<boolean>(false),
    [initWidth, setInitWith] = useState<number>(0),
    [size, setSize] = useState<number>(0),
    nodeRef = useRef<null | HTMLImageElement>(null),
    [value, setValue] = useState<number>(0);

  // INITIAL VALUE SETTING
  useEffect(() => {
    const imageRef = document.getElementById("portfolio-image");
    const widthImage = imageRef?.offsetWidth;

    setInitWith(widthImage as number);
    setSize(widthImage as number);
  }, []);

  // TRANSFORM IMAGE WHEN CLICK
  useEffect(() => {
    if (size < initWidth * 2.5) {
      gsap.to("#portfolio-image", {
        width: size * 1.4,
        duration: 0.5,
      });
      if (size !== initWidth) {
        const ratio = size / (initWidth * 2);
        setValue(ratio * 100);
      }
    }
  }, [size]);

  // TRANSFORM IMAGE WHEN SLIDE
  useEffect(() => {
    if (value !== 0) {
      gsap.to("#portfolio-image", {
        width: initWidth * (1.5 + value / 100),
        ease: "power3",
        duration: 0.5,
      });
    }
  }, [value]);

  // Slider for zooming
  const handleSlider = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleClickToZoom = (e: React.MouseEvent<HTMLImageElement>) => {
    const imageRef = document.getElementById("portfolio-image");
    setSize(imageRef?.offsetWidth as number);
  };

  const handleDragStart = () => {
    setDrag(true);
  };

  const handleDragStop = () => {
    setDrag(false);
  };

  return (
    <Box
      sx={{
        p: 0,
        height: "100vh",
        backgroundColor: "#2e2e2e",
        width: "100vw",
        position: "relative",
        ...flexBox_Config,
        alignItems: "space-between",
      }}
      className="image-container"
    >
      <Box
        sx={{
          borderBottom: "0.5px white solid",
          pt: mobile ? 0 : 1,
          pb: mobile ? 0 : 1,
          width: "100%",
          display: "flex",
          height: "10vh",
          justifyContent: "center",
        }}
      >
        <IconButton sx={{ color: "white", ml: "auto" }} onClick={onClick}>
          <CloseIcon
            sx={{
              border: "white 1px solid",
              borderRadius: "50%",
              p: 1,
              fontSize: "2.5rem",
              "&:hover": {
                border: "white 2px solid",
                fontWeight: 800,
              },
            }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          p: mobile ? 1 : 3,
          backgroundColor: "black",
          width: "100vw",
          height: "80vh",
          borderBottom: "0.5px solid white",
          ...flexBox_Config,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#2e2e2e",
            m: "auto",
            height: "85vh",
            width: mobile ? "90vw" : "95vw",
            overflow: "hidden",
            position: "relative",
            ...flexBox_Config,
          }}
        >
          <Draggable
            nodeRef={nodeRef as React.RefObject<HTMLImageElement>}
            onStart={handleDragStart}
            onStop={handleDragStop}
            disabled={drag}
            grid={[50, 50]}
          >
            <img
              ref={nodeRef}
              onClick={handleClickToZoom}
              id="portfolio-image"
              src={imageUrl}
              alt="image"
              style={{
                width: mobile ? "90%" : "50%",
                height: "auto",
                objectFit: "cover",
                backgroundColor: "#2e2e2e",
                transition: "0.5s ease",
                cursor: "grab",
              }}
            />
          </Draggable>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              zIndex: 1000,
              width: "250px",
              height: "50px",
              alignItems: "center",
              position: "absolute",
              left: "50%",
              bottom: "1%",
              transform: "translate(-50%, -50%)",
              border: "white 1px solid",
              borderRadius: "25px",
              p: 2,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <ZoomOutIcon sx={{ color: "white" }} id="zoomOut-icon" />
            <Slider
              sx={{ color: "white" }}
              value={value}
              defaultValue={0}
              onChange={handleSlider}
            ></Slider>
            <ZoomInIcon sx={{ color: "white" }} id="zoomIn-icon" />
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{ height: "10vh", backgroundColor: "#2e2e2e", mt: "auto" }}
      ></Box>
    </Box>
  );
};
export default ViewImage;

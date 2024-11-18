import {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { Box } from "@mui/material";

import gsap from "gsap";

interface CustomRef {
  banner: () => HTMLDivElement | null;
}

const Banner = forwardRef<CustomRef>((props, ref) => {
  const bannerContainerRef = useRef<HTMLDivElement | any>(),
    titleRef = useRef<HTMLDivElement | any>();

  useImperativeHandle(ref, () => ({
    banner: () => bannerContainerRef.current,
  }));

  useEffect(() => {
    const bannerWidth = bannerContainerRef.current.offsetWidth;
    const titleWidth = titleRef.current.offsetWidth;
    const moving = titleWidth - bannerWidth;

    gsap.to(titleRef.current, {
      x: -moving,
      duration: 8,
      yoyo: true,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: " 90px",
        margin: "auto",
        borderRadius: "45px",
        width: "0%",
        position: "relative",
      }}
      ref={bannerContainerRef}
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          color: "#f9cb75",
          height: "100%",
        }}
        ref={titleRef}
      >
        <p className="title-banner">PLANNER</p>
        <p className="dot-banner">&#183;</p>
        <p className="title-banner">MARKETING CONSULTANT</p>
        <p className="dot-banner">&#183;</p>
        <p className="title-banner">CREATIVE</p>
        <p className="dot-banner">&#183;</p>
        <p className="title-banner">DESIGN</p>
      </Box>
    </Box>
  );
});

export default Banner;

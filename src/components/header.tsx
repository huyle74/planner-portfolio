import { forwardRef, useState, useEffect, ForwardedRef, useRef } from "react";
import { Box, Button } from "@mui/material";
import gsap from "gsap";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Huyen_word from "./head-component/huyen_word";
import Vo_word from "./head-component/vo_word";
import Banner from "./head-component/banner";

import { flexBox_Config } from "@/app/ultility/style-component";

type ChildProps = {
  mobile: boolean;
};

const Header = forwardRef(function mainHead(
  { mobile }: ChildProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const arrowRef = useRef<HTMLDivElement | any>(null),
    voRef = useRef<HTMLDivElement | any>(null),
    huyenRef = useRef<HTMLDivElement | any>(null),
    [circleRef, setCircleRef] = useState<HTMLDivElement | any>(null),
    [halfScreenWidth, setHalfScreenWidth] = useState<number | any>(null),
    bannerRef = useRef<HTMLDivElement | any>(null),
    [eyeMove, setEyeMove] = useState<number>(1);

  useEffect(() => {
    const v = voRef.current.v();
    const circle: HTMLDivElement = voRef.current.circle();
    const container: HTMLDivElement = voRef.current.container();
    setCircleRef(circle);

    const halfScreen: number = window.innerWidth / 2;
    setHalfScreenWidth(halfScreen);

    const banner: HTMLDivElement = bannerRef.current.banner();

    const tl = gsap.timeline();
    gsap.to(huyenRef.current, {
      duration: 1,
      ease: "bounce",
      y: 0,
    });
    gsap.to(banner, {
      width: "100%",
      duration: 1,
      ease: "power1.in",
    });
    gsap.to(arrowRef.current, {
      y: "10px",
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    tl.to(v, {
      transform: "translateY(0%)",
      duration: 1,
      ease: "bounce",
    }).to(container, {
      width: "100%",
      duration: 1,
      ease: "bounce",
    });
  }, []);

  useEffect(() => {
    if (!circleRef) {
      return;
    }
    const containerWidth = mobile ? 254 : 534;

    const moving: number = window.innerWidth / containerWidth;
    const move =
      eyeMove > halfScreenWidth
        ? -eyeMove / moving / 2.4
        : (window.innerWidth - eyeMove) / moving / 2.4;

    gsap.to(".circle_eye_header", {
      x: move,
      duration: 1,
      ease: "power2.out",
    });
  }, [eyeMove]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setEyeMove(e.clientX);
  };

  return (
    <Box
      sx={{
        mt: mobile ? 9 : "",
        width: "100vw",
        height: "100%",
      }}
      onMouseMove={handleMouseMove}
    >
      <Box
        sx={{
          height: mobile ? "fit-content" : "100vh",
          ...flexBox_Config,
          position: "relative",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            ...flexBox_Config,
            height: "fit-content",
          }}
        >
          <Huyen_word ref={huyenRef} mobile={mobile} />
          <Banner ref={bannerRef} />
          <Vo_word ref={voRef} />
        </Box>
        {mobile ? (
          ""
        ) : (
          <Button
            sx={{
              width: "max-content",
            }}
            ref={arrowRef}
            href="#about"
          >
            <ExpandMoreIcon sx={{ fontSize: "90px", color: "black" }} />
          </Button>
        )}
      </Box>
    </Box>
  );
});

export default Header;

import { forwardRef, useState, useEffect, ForwardedRef, useRef } from "react";
import { Box, Button } from "@mui/material";
import gsap from "gsap";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Huyen_word from "./head-component/huyen_word";
import Vo_word from "./head-component/vo_word";
import Banner from "./head-component/banner";

import { flexBox_Config } from "@/app/ultility/style-component";

const Header = forwardRef(function mainHead(
  props: object,
  ref: ForwardedRef<HTMLDivElement>
) {
  const arrowRef = useRef<HTMLDivElement | any>(),
    voRef = useRef<HTMLDivElement | any>(),
    huyenRef = useRef<HTMLDivElement | any>(),
    [circleRef, setCircleRef] = useState<HTMLDivElement | any>(),
    [moving, setMoving] = useState<number | undefined | any>(),
    [halfScreenWidth, setHalfScreenWidth] = useState<number | any>(),
    bannerRef = useRef<HTMLDivElement | any>(),
    [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }

    const v = voRef.current.v();
    const circle: HTMLDivElement = voRef.current.circle();
    const container: HTMLDivElement = voRef.current.container();
    setCircleRef(circle);

    const halfScreen: number = window.innerWidth / 2;
    setHalfScreenWidth(halfScreen);
    const delayMeasure = setTimeout(() => {
      const conWidth: number = container.offsetWidth;
      const moving: number = window.innerWidth / conWidth;
      setMoving(moving);
    }, 2000);

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
    return () => clearTimeout(delayMeasure);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    if (x > halfScreenWidth) {
      const move = x / moving / 2.4;
      gsap.to(circleRef, {
        x: -move,
        duration: 1,
        ease: "power2.Out",
      });
    } else {
      const move: number = (window.innerWidth - x) / moving / 2.4;
      gsap.to(circleRef, {
        x: move,
        duration: 1,
        ease: "power2.Out",
      });
    }
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh" }} onMouseMove={handleMouseMove}>
      <Box
        sx={{
          height: "100vh",
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
          <Vo_word ref={voRef} mobile={mobile} />
        </Box>
        <Button
          sx={{ position: "absolute", bottom: "2%", width: "max-content" }}
          ref={arrowRef}
          href="#about"
        >
          <ExpandMoreIcon sx={{ fontSize: "90px", color: "black" }} />
        </Button>
      </Box>
    </Box>
  );
});

export default Header;

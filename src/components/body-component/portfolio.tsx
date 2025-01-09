import { useState, useRef, useEffect } from "react";

import { Box } from "@mui/material";
import gsap from "gsap";

import PortGallery from "./portfolio-gallery";
import { flexBox_Config, hoverBox_body } from "@/app/ultility/style-component";

type ChildProps = {
  data: any[];
  mobile: boolean;
};

const Portfolio: React.FC<ChildProps> = ({ data, mobile }) => {
  const cirConRef = useRef<HTMLDivElement | any>(null),
    cirRef = useRef<HTMLDivElement | any>(null),
    portRef = useRef<HTMLDivElement | null | any>(null),
    [effect, setEffect] = useState<boolean>(false),
    galleryRef = useRef<HTMLDivElement | any>(null),
    [eyeMove, setEyeMove] = useState<number | any>(),
    [galleryMove, setGalleryMove] = useState<number | any>(),
    [screenWidth, setScreenWidth] = useState<number | null | any>(),
    galConRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    const screen: number = window.innerWidth;
    setScreenWidth(screen);

    const delayMeasure = setTimeout(() => {
      const eyeContainerWidth = cirConRef.current.offsetWidth;

      setEyeMove(eyeContainerWidth);
    }, 1000);

    return () => clearTimeout(delayMeasure);
  }, []);

  useEffect(() => {
    if (effect) {
      gsap.to(".body_mainPage", {
        height: "100%",
      });
      gsap.to(cirConRef.current, {
        width: mobile ? "10rem" : "20rem",
        duration: 0.5,
        ease: "bounce",
      });
      gsap.to(cirRef.current, {
        transform: "translateY(8px)",
        ease: "power3.inOut",
      });
      gsap.to(galConRef.current, {
        height: "100%",
      });
      gsap.to(galleryRef.current, {
        opacity: 1,
        width: "max-content",
        height: "100%",
      });
      gsap.to(".portfolio-project", {
        height: mobile ? "50px" : "50vh",
      });
    } else {
      gsap.to(".body_mainPage", {
        height: mobile ? "fit-content" : "100vh",
      });
      gsap.to(cirRef.current, {
        transform: "translateY(0)",
        x: 0,
        duration: 0.3,
      });
      gsap.to(cirConRef.current, {
        width: mobile ? "50px" : "65px",
        height: mobile ? "50px" : "65px",
        borderRadius: mobile ? "25px" : "32.5px",
        duration: 0.4,
        ease: "bounce.out",
      });
      gsap.to(galConRef.current, {
        height: 0,
        paddingBottom: 0,
      });
      gsap.to(galleryRef.current, {
        opacity: 0,
        width: 0,
        height: "0%",
      });
      gsap.to(".portfolio-project", {
        height: 0,
      });
    }
    const delay = setTimeout(() => {
      if (effect) {
        const galleryWidth = galleryRef.current.offsetWidth;
        setGalleryMove(galleryWidth);
      }
    }, 1000);
    return () => clearTimeout(delay);
  }, [effect, mobile]);

  const handleClick = () => {
    if (effect) {
      setEffect(false);
    } else {
      setEffect(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (effect) {
      const axis: number = e.clientX;

      if (axis >= screenWidth / 2) {
        const move = (((4 * axis) / screenWidth - 1) * eyeMove) / 2;
        const galMove: number =
          (((2 * axis) / screenWidth - 1) * galleryMove) / 3;

        gsap.to(cirRef.current, {
          duration: 0.1,
          x: -move,
        });
        gsap.to(galleryRef.current, {
          x: -galMove,
          duration: 0.1,
        });
      } else {
        const move = (1 - axis / (screenWidth / 2)) * eyeMove;
        const galMove: number =
          ((1 - axis / (screenWidth / 2)) * galleryMove) / 3;

        gsap.to(cirRef.current, {
          duration: 0.1,
          x: move,
        });
        gsap.to(galleryRef.current, {
          x: galMove,
          duration: 0.1,
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (effect) {
      gsap.to(galleryRef.current, {
        x: 0,
      });
      gsap.to(cirRef.current, {
        x: 0,
        duration: 0.3,
      });
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        ...flexBox_Config,
      }}
    >
      <a
        className="link portfolio"
        href="#portfolio"
        onClick={handleClick}
        ref={portRef}
      >
        <Box
          sx={
            mobile
              ? {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  p: 3,
                }
              : hoverBox_body
          }
        >
          <p
            className="title-effect"
            style={{
              fontSize: mobile ? "3rem" : "5rem",
            }}
          >
            PORTF
          </p>
          <Box
            sx={{
              ...flexBox_Config,
              backgroundColor: "white",
              width: mobile ? "50px" : "65px",
              height: mobile ? "50px" : "65px",
              borderRadius: mobile ? "25px" : "32.5px",
              overflow: "hidden",
            }}
            ref={cirConRef}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              ref={cirRef}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                }}
              ></Box>
            </Box>
          </Box>
          <p
            className="title-effect"
            style={{
              fontSize: mobile ? "3rem" : "5rem",
            }}
          >
            LIO
          </p>
        </Box>
      </a>
      <Box
        sx={{
          overflowX: "hidden",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          height: 0,
          overflowY: "hidden",
        }}
        onMouseMove={effect ? handleMouseMove : undefined}
        onMouseLeave={effect! ? handleMouseLeave : undefined}
        ref={galConRef}
      >
        <PortGallery ref={galleryRef} data={data} mobile={mobile} />
      </Box>
    </Box>
  );
};

export default Portfolio;

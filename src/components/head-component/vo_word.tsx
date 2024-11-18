import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { Box } from "@mui/material";

import gsap from "gsap";

interface CustomRef {
  circle: () => HTMLDivElement | null;
  container: () => HTMLDivElement | null;
}

const Vo_word = forwardRef<CustomRef>((props, ref) => {
  const circleRef = useRef<HTMLDivElement | null>(null),
    circleContainerRef = useRef<HTMLDivElement | null>(null),
    vRef = useRef<HTMLDivElement | null>(null),
    [effect, setEffect] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    circle: () => circleRef.current,
    container: () => circleContainerRef.current,
    v: () => vRef.current,
  }));

  useEffect(() => {
    let tl = gsap.timeline();

    if (effect) {
      tl.to(circleContainerRef.current, {
        height: "30px",
        duration: 0.5,
        ease: "bounce.in",
      })
        .to(circleRef.current, {
          width: "50px",
        })
        .to(circleContainerRef.current, {
          height: "150px",
          duration: 0.2,
          ease: "bounce.in",
        });

      gsap.to("body", {
        backgroundColor: "black",
      });
      gsap.to(vRef.current, {
        color: "#f9cb75",
      });
      gsap.to(circleContainerRef.current, {
        backgroundColor: "#f9cb75",
      });
      gsap.to("#huyen-word", {
        color: "#f9cb75",
      });
      gsap.to(".social-icon", {
        filter: "brightness(0) invert(1)",
      });
      gsap.to(".name-footer", {
        color: "#f9cb75",
      });
      gsap.to(".link", {
        backgroundColor: "black",
      });
      gsap.to(".title-effect", {
        color: "#f9cb75",
      });
    } else {
      tl.to(circleContainerRef.current, {
        height: "30px",
        duration: 0.4,
        ease: "bounce.in",
      })
        .to(circleRef.current, {
          width: "160px",
        })
        .to(circleContainerRef.current, {
          height: "150px",
          duration: 0.2,
          ease: "bounce.in",
        });

      gsap.to("body", {
        backgroundColor: "#f9cb75",
      });
      gsap.to(vRef.current, {
        color: "black",
      });
      gsap.to(circleContainerRef.current, {
        backgroundColor: "white",
      });
      gsap.to("#huyen-word", {
        color: "black",
      });
      gsap.to(".social-icon", {
        filter: "none",
      });
      gsap.to(".name-footer", {
        color: "black",
      });
      gsap.to(".link", {
        backgroundColor: "#f9cb75",
      });
      gsap.to(".title-effect", {
        color: "black",
      });
    }
  }, [effect]);

  const handleEyeEffect = () => {
    if (!effect) {
      setEffect(true);
    } else {
      setEffect(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        mt: 3,
        // border: "1px red solid",
        width: "100%",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          // border: "1px black solid",
          fontSize: "180px",
          fontWeight: 900,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          lineHeight: 1,
          transform: "translateY(-50%)",
        }}
        ref={vRef}
      >
        V
      </Box>
      <Box
        sx={{
          m: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          onClick={handleEyeEffect}
          sx={{
            width: "0%",
            backgroundColor: "white",
            height: "150px",
            display: "flex",
            alignItems: "center",
            // border: "1px black solid",
            borderRadius: "75px",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
          ref={circleContainerRef}
        >
          <Box
            ref={circleRef}
            sx={{
              height: "160px",
              width: "160px",
              backgroundColor: "black",
              borderRadius: "80px",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
});
export default Vo_word;

import { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

import { hoverBox_body, flexBox_Config } from "@/app/ultility/style-component";

export default function Contact() {
  const oRef = useRef<HTMLDivElement | null>(null),
    [effect, setEffect] = useState<boolean>(false),
    wordRef = useRef<HTMLDivElement | null>(null),
    infoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let tl = gsap.timeline();
    if (effect) {
      tl.to(oRef.current, {
        width: "30vw",
        ease: "bounce",
      })
        .to(wordRef.current, {
          display: "block",
        })
        .to(infoRef.current, {
          height: "100%",
          ease: "power1.inOut",
          display: "block",
        });
    } else {
      tl.to(wordRef.current, {
        display: "none",
      })
        .to(oRef.current, {
          width: "65px",
          ease: "bounce",
        })
        .to(infoRef.current, {
          height: "0%",
          ease: "power1.inOut",
          display: "none",
        });
    }
  }, [effect]);

  const handleClick: any = () => {
    if (effect) {
      setEffect(false);
    } else {
      setEffect(true);
    }
    console.log(effect);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        ...flexBox_Config,
      }}
    >
      <a className="link" href="#contact" onClick={handleClick}>
        <Box
          sx={{
            ...hoverBox_body,
          }}
        >
          <p className="title-effect">C</p>
          <Box className="o_letter" ref={oRef}>
            <p
              style={{
                display: "none",
                fontSize: "1.8rem",
                color: "#f9cb75",
                width: "fit-content",
              }}
              ref={wordRef}
            >
              HOW CAN I HELP YOU?
            </p>
          </Box>
          <p className="title-effect">NTACT</p>
        </Box>
      </a>
      <Box
        className="title-effect"
        sx={{
          height: 0,
          overflow: "hidden",
          textAlign: "center",
          color: "black",
          textWrap: "nowrap",
          display: "none",
        }}
        ref={infoRef}
      >
        Contact me via Email: sample@gmail.com or LinkedIn
      </Box>
    </Box>
  );
}

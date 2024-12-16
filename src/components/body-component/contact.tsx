import { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

import { hoverBox_body, flexBox_Config } from "@/app/ultility/style-component";

type ChildProps = {
  mobile: boolean;
};

const Contact: React.FC<ChildProps> = ({ mobile }) => {
  const oRef = useRef<HTMLDivElement | null>(null),
    [effect, setEffect] = useState<boolean>(false),
    wordRef = useRef<HTMLDivElement | null>(null),
    infoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let tl = gsap.timeline();
    if (effect) {
      tl.to(oRef.current, {
        width: mobile ? "100vw" : "30vw",
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
          width: mobile ? "50px" : "65px",
          height: mobile ? "50px" : "65px",
          borderRadius: mobile ? "25px" : "32.5px",
          ease: "bounce",
        })
        .to(infoRef.current, {
          height: "0%",
          ease: "power1.inOut",
          display: "none",
        });
    }
  }, [effect, mobile]);

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
            C
          </p>
          <Box
            className="o_letter"
            ref={oRef}
            sx={{
              width: mobile ? "50px" : "65px",
              height: mobile ? "50px" : "65px",
              borderRadius: mobile ? "25px" : "32.5px",
            }}
          >
            <p
              style={{
                display: "none",
                fontSize: mobile ? "0.7rem" : "1.8rem",
                color: "#f9cb75",
                width: "fit-content",
              }}
              ref={wordRef}
            >
              HOW CAN I HELP YOU?
            </p>
          </Box>
          <p
            className="title-effect"
            style={{
              fontSize: mobile ? "3rem" : "5rem",
            }}
          >
            NTACT
          </p>
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
          fontSize: mobile ? "0.9rem" : "",
        }}
        ref={infoRef}
      >
        Contact me via Email: sample@gmail.com or LinkedIn
      </Box>
    </Box>
  );
};

export default Contact;

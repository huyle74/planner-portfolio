import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

import { hoverBox_body } from "@/app/ultility/style-component";

type ChildProps = {
  mobile: boolean;
};

const About: React.FC<ChildProps> = ({ mobile }) => {
  const [effect, setEffect] = useState(false),
    oRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (effect) {
      tl.to(oRef.current, {
        width: mobile ? "200px" : "400px",
        height: "400px",
        borderRadius: "200px",
        duration: 0.8,
        ease: "bounce",
      }).to(".para-about", {
        display: "block",
        duration: 0.2,
      });
    } else {
      tl.to(".para-about", {
        display: "none",
      }).to(oRef.current, {
        width: mobile ? "50px" : "65px",
        height: mobile ? "50px" : "65px",
        borderRadius: mobile ? "25px" : "32.5px",
        duration: 0.8,
        ease: "bounce",
      });
    }
  }, [effect, mobile]);

  const handleClick = () => {
    if (!effect) {
      setEffect(true);
    } else {
      setEffect(false);
    }
  };

  return (
    <a href="#about" className="link" onClick={handleClick}>
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
          AB
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
              fontSize: mobile ? "10px" : "15px",
              display: "none",
              color: "white",
              width: "80%",
              textAlign: "center",
              fontWeight: 300,
              height: "max-content",
            }}
            className="para-about"
          >
            My name is Huyen Vo, a passionate Marketing Planner with three years
            of experience working with some of the biggest brands in Vietnam. I
            specialize in crafting strategic marketing campaigns, driving brand
            growth, and ensuring impactful audience engagement. With a keen eye
            for market trends and consumer behavior, I strive to create
            innovative solutions that elevate brand presence and business
            success.
          </p>
        </Box>
        <p
          className="title-effect"
          style={{
            fontSize: mobile ? "3rem" : "5rem",
          }}
        >
          UT
        </p>
      </Box>
    </a>
  );
};

export default About;

import React from "react";
import { useRef, useEffect, useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";

import ViewOVerview from "./view-body-overview";
import ViewCredits from "./view-body-credits";

type ChildProps = {
  data: any;
};

const ViewBody: React.FC<ChildProps> = ({ data }) => {
  const barRef = useRef<HTMLDivElement | null>(null),
    [barHeight, setBarHeight] = useState<number>(0),
    [value, setValue] = useState<string>("1");

  const styleTabClicked = {
    "&.Mui-selected": {
      backgroundColor: "black",
      color: "white",
      borderRadius: `${barHeight}px`,
      BorderBottom: "none",
      transition: "0.5s ease",
      "&: hover": {
        color: "white",
      },
    },
    color: "black",
    "&: hover": {
      color: "gray",
    },
  };

  useEffect(() => {
    const height = barRef.current?.offsetWidth;
    setBarHeight(height as number);
  }, []);

  const handleTabValue = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80%", m: "auto", mt: 10, mb: 7 }} ref={barRef}>
      <TabContext value={value}>
        <Box
          sx={{
            backgroundColor: "white",
            border: "2px black solid",
            borderRadius: `${barHeight}px`,
            mb: 4,
          }}
        >
          <TabList
            onChange={handleTabValue}
            variant="fullWidth"
            centered
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Tab
              label="Overview"
              value="1"
              sx={{
                ...styleTabClicked,
              }}
            />
            <Tab
              label="Credits"
              value="2"
              sx={{
                ...styleTabClicked,
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ViewOVerview data={data} />
        </TabPanel>
        <TabPanel value="2">
          <ViewCredits data={data?.people} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ViewBody;

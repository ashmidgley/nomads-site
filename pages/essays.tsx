import React from "react";

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from "@chakra-ui/react";

import { HeroHeader, TabOneContent, TabTwoContent } from "../components";

const tabMobileStyles = {
  fontSize: "0.875rem",
  fontWeight: 500,
  lineHeight: "1.063rem",
};

const tabDesktopStyles = {
  fontSize: "1.125rem",
  fontWeight: 600,
  lineHeight: "1.375rem",
};

const selectedStyles = {
  color: "white",
  background: "rgba(9, 9, 24, 0.8)",
  marginBottom: "0px",
};

export default function Essays() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <HeroHeader
        backgroundUrl={
          isMobile
            ? "images/mobile/banner-essays.jpg"
            : "images/desktop/banner-essays.jpg"
        }
        heading="Thoughts about living and working in a bold new world"
      />
      <Tabs
        isFitted
        mt="-72px"
        background="rgba(9, 9, 24, 0.3)"
        color="white"
        borderBottom="none"
      >
        <TabList height="72px">
          <Tab
            style={isMobile ? tabMobileStyles : tabDesktopStyles}
            _selected={selectedStyles}
          >
            {"Happiness And Fulfulment In The Modern Workplace"}
          </Tab>
          <Tab
            style={isMobile ? tabMobileStyles : tabDesktopStyles}
            _selected={selectedStyles}
          >
            {"Agile Development"}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel padding={0}>
            <TabOneContent />
          </TabPanel>
          <TabPanel padding={0}>
            <TabTwoContent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

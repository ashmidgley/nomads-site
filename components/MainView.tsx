import React, { FC, useContext } from "react";

import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { use100vh } from "react-div-100vh";

import { AppContext } from "../contexts";

import { ErrorAlertBanner } from "./ErrorAlertBanner";
import { Footer } from "./Footer";
import { NavigationBar } from "./Navigation/NavigationBar";

export interface MainViewProps extends BoxProps {
  children?: React.ReactNode;
}

export const MainView: FC<MainViewProps> = ({ children = null, ...props }) => {
  const { error } = useContext(AppContext);

  const height = use100vh();

  return (
    <>
      <ErrorAlertBanner error={error} />
      <Flex
        as="main"
        direction="column"
        minHeight={height ? height : "100vh"}
        width="100%"
        marginX="auto"
        flex={1}
        background="linear-gradient(0deg, #1E4D68 17.83%, #090918 60.48%)"
        {...props}
      >
        <Box
          position="fixed"
          width={6}
          top={0}
          left={0}
          bottom={0}
          zIndex={2}
        />
        <NavigationBar />
        <Flex flex={1} direction="column">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

import React, { FC, useContext, useEffect, useState } from "react";

import { Box, Flex, Link, useBreakpointValue } from "@chakra-ui/react";
import { Squash as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";

import { AppContext } from "../../contexts";

import { NomadsHorizontalLogo } from "../Logo";
import { NavigationBarLink } from "./NavigationBarLink";
import { NavigationSidebar } from "./NavigationSidebar";
import { NavigationSidebarLink } from "./NavigationSidebarLink";

export const NavigationBar: FC = () => {
  const { isNavSidebarOpen, setIsNavSidebarOpen } = useContext(AppContext);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { route } = useRouter();
  const [zIndex, setZIndex] = useState(5);

  useEffect(() => {
    if (isNavSidebarOpen) {
      setZIndex(9999);
    } else {
      setTimeout(() => {
        setZIndex(5);
      }, 200);
    }
  }, [isNavSidebarOpen]);

  const desktopLayout = (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      minHeight={14}
      px={24}
    >
      <Flex alignItems="center">
        <Link
          href="/"
          _hover={{ textDecoration: "none" }}
          aria-label="Home link"
        >
          <NomadsHorizontalLogo />
        </Link>
      </Flex>
      <Flex alignItems="center" gap={24}>
        <NavigationBarLink
          href="/hire"
          label="Hire"
          marginLeft={6}
          isActive={route === "/hire"}
        />
        <NavigationBarLink
          href="/about"
          label="About"
          isActive={route === "/about"}
          marginLeft={6}
        />
        <NavigationBarLink
          href="/join"
          label="Join"
          isActive={route === "/join"}
          marginLeft={6}
        />
        <NavigationBarLink
          href="/essays"
          label="Essays"
          isActive={route === "/essays"}
          marginLeft={6}
        />
      </Flex>
    </Flex>
  );

  const mobileLayout = (
    <Flex alignItems="center" justifyContent="space-between" minHeight={14}>
      <Link href="/" _hover={{ textDecoration: "none" }} aria-label="Home link">
        <NomadsHorizontalLogo />
      </Link>
      <Flex>
        <Hamburger
          label="Toggle sidebar menu open"
          size={24}
          toggled={isNavSidebarOpen}
          toggle={() => setIsNavSidebarOpen(!isNavSidebarOpen)}
          color="white"
        />
      </Flex>
    </Flex>
  );

  const sidebarContent = (
    <Flex
      as="nav"
      direction="column"
      height="100%"
      justifyContent="space-between"
      paddingY={2}
    >
      <Flex
        direction="column"
        justifyContent="space-between"
        gap="4.5rem"
        marginTop="4.5rem"
      >
        <NavigationSidebarLink
          href="/hire"
          label="Hire"
          isActive={route === "/hire"}
        />
        <NavigationSidebarLink
          href="/about"
          label="About"
          isActive={route === "/about"}
        />
        <NavigationSidebarLink
          href="/join"
          label="Join"
          isActive={route === "/join"}
        />
        <NavigationSidebarLink
          href="/essays"
          label="Essays"
          isActive={route === "/essays"}
        />
      </Flex>
    </Flex>
  );

  return (
    <>
      <Box
        m={0}
        px={{ base: 3, md: 5 }}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.08)"
        position="fixed"
        top={0}
        left={0}
        right={0}
        width="100%"
        zIndex={zIndex}
        minHeight={14}
        background="rgba(9, 9, 24, 0.3)"
      >
        {isMobile ? mobileLayout : desktopLayout}
      </Box>
      {isMobile && (
        <NavigationSidebar
          isOpen={isNavSidebarOpen}
          onClose={() => setIsNavSidebarOpen(false)}
        >
          {sidebarContent}
        </NavigationSidebar>
      )}
    </>
  );
};

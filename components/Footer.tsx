import React, { FC } from "react";

import { Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";

import { NomadsSeatedLogo } from "./Logo";

export const Footer: FC = () => {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const getFooterImageUrl = () => {
    if (isMobile) {
      return "/images/mobile/footer.jpg";
    }

    switch (router.pathname) {
      case "/about":
        return "/images/desktop/footer-about.jpg";
      case "/hire":
        return "/images/desktop/footer-hire.jpg";
      case "/join":
        return "/images/desktop/footer-join.jpg";
      case "/pitch-deck":
        return "/images/desktop/footer-pitch-deck.jpg";
      case "/essays":
        return "/images/desktop/footer-essays.jpg";
      default:
        return "/images/desktop/footer-landing.jpg";
    }
  };

  return (
    <Flex
      as="footer"
      direction="column"
      justifyContent="space-between"
      marginTop="auto"
      paddingY={3}
      px={{ base: 0, md: 24 }}
      background={`url('${getFooterImageUrl()}')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        marginY={5}
        paddingX={{ base: 6, md: 10 }}
        width="100%"
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Flex
            direction="column"
            marginBottom={{ base: 5, md: 0 }}
            justifyContent="center"
          >
            <Flex
              width="100%"
              justifyContent={{ base: "center", md: "flex-end" }}
            >
              <NomadsSeatedLogo />
            </Flex>
            <Flex
              direction="column"
              justifyContent={{ base: "center", md: "center" }}
              textAlign="center"
            >
              <Text
                marginTop={4}
                marginLeft={1}
                maxWidth="25rem"
                textAlign={{ base: "center", md: "right" }}
              >
                {"contact@rationalnomads.com"}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          direction="row"
          width="100%"
          paddingX={{ base: "15%", md: 0 }}
          marginTop={{ base: 10, md: 0 }}
        >
          <Flex
            marginLeft={{ base: 0, md: "auto" }}
            gap={{ base: "6.875rem", md: 0 }}
          >
            <Flex
              direction="column"
              marginBottom={{ base: 10, md: 0 }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Flex
                direction="column"
                fontSize="18px"
                fontWeight={600}
                gap={10}
              >
                <Link href={"/hire"} marginY={{ base: 1, md: 1 }}>
                  {"Hire"}
                </Link>
                <Link href={"/join"} marginY={{ base: 1, md: 1 }}>
                  {"Join"}
                </Link>
              </Flex>
            </Flex>

            <Flex
              direction="column"
              marginX={{ base: 0, md: 24 }}
              marginBottom={{ base: 10, md: 0 }}
              marginRight={{ base: 0, md: "auto" }}
            >
              <Flex
                direction="column"
                fontSize="18px"
                fontWeight={600}
                gap={10}
              >
                <Link href="/about" marginY={{ base: 1, md: 1 }}>
                  {"About"}
                </Link>
                <Link href="/essays" marginY={{ base: 1, md: 1 }}>
                  {"Essays"}
                </Link>
                <Link href="/pitch-deck" marginY={{ base: 1, md: 1 }}>
                  {"Pitch Deck"}
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        paddingTop={{ base: 3, md: 5 }}
        paddingBottom={{ base: 2, md: 3 }}
        paddingX={{ base: 2, md: 10 }}
        mx="auto"
        fontSize="14px"
        marginBottom={{ base: 2, md: 0 }}
        opacity={0.3}
      >
        <Text>{"© Rational Nomads 2022."}</Text>
        <Text ml={{ base: 0, md: 2 }}>
          {"Images created using Midjourney!"}
        </Text>
      </Flex>
    </Flex>
  );
};

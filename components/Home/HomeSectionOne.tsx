import React, { FC } from "react";

import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

import { HomeSectionContainer } from "./HomeSectionContainer";

export const HomeSectionOne: FC = () => {
  return (
    <HomeSectionContainer>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="7.5rem"
      >
        <Flex gap={{ base: 16, md: 20 }}>
          <Flex direction="column" justifyContent="center">
            <Link href="https://www.zero.tech">
              <Image
                src="/images/zer0.png"
                alt="Zer0 Logo"
                width={213}
                height={62}
              />
            </Link>
          </Flex>
          <Flex direction="column" justifyContent="center">
            <Link href="https://www.wilderworld.com/">
              <Image
                src="/images/wilder-world.png"
                alt="Wilder World Logo"
                width={97}
                height={92}
              />
            </Link>
          </Flex>
        </Flex>
        <Box
          fontSize={{ base: "1.5rem", md: "2.5rem" }}
          fontWeight={700}
          lineHeight={{ base: "2rem", md: "3rem" }}
          textAlign="center"
        >
          <Text as="span" color="#CDE0E4">
            {"We design and build web apps and other digital products to "}
          </Text>
          <Text as="span">{"turn ideas into reality"}</Text>
        </Box>
      </Flex>
    </HomeSectionContainer>
  );
};

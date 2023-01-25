import React, { FC } from "react";

import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import { HomeSectionContainer } from "./HomeSectionContainer";

export const HomeSectionTwo: FC = () => {
  const router = useRouter();

  return (
    <HomeSectionContainer
      direction={{ base: "column-reverse", md: "row" }}
      px={{ base: 8, md: 24 }}
    >
      <Flex direction="column" justifyContent="center" maxWidth={550}>
        <Text
          fontSize={{ base: "1.5rem", md: "2.5rem" }}
          lineHeight={{ base: "1.875rem", md: "3rem" }}
          fontWeight={700}
          mb={6}
        >
          {"Helping organizations work seamlessly to achieve more"}
        </Text>
        <Text mb={3}>
          {
            "We present ourselves as a single team member in your organization; a unicorn that is self-motivated, self-managing and with a skill set across the spectrum."
          }
        </Text>
        <Text>
          {
            "Someone who can multitask to do as much or as little as you need, whenever you need it."
          }
        </Text>
        <Button
          variant="client"
          onClick={() => router.push("/pitch-deck")}
          mt={12}
          maxWidth={{ base: 200, md: 250 }}
        >
          {"VIEW PITCH DECK"}
        </Button>
      </Flex>
      <Flex direction="column" justifyContent="center" my={{ base: 24, md: 0 }}>
        <Image
          src="/images/mockups.png"
          alt="Mockups"
          width={655}
          height={395}
        />
      </Flex>
    </HomeSectionContainer>
  );
};

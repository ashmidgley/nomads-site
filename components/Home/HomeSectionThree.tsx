import React, { FC } from "react";

import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { HomeSectionContainer } from "./HomeSectionContainer";

export const HomeSectionThree: FC = () => {
  const router = useRouter();

  return (
    <HomeSectionContainer>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Text as="h1" marginBottom={10}>
          {"Become a Nomad"}
        </Text>
        <Text as="h2" marginBottom={4}>
          {
            "Our members get to live the dream and enjoy the flexibility to work wherever they are in the world and whenever they want, while still being part of a supportive community."
          }
        </Text>
        <Text as="h3">
          {
            "If this sounds like your dream too and you want to learn more, ping us."
          }
        </Text>
        <Button
          variant="nomad"
          marginTop={10}
          width={{ base: 170, md: 210 }}
          onClick={() => router.push("/join")}
        >
          {"CHAT WITH US"}
        </Button>
      </Flex>
    </HomeSectionContainer>
  );
};

import React, { FC } from "react";

import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { HomeSectionContainer } from "./HomeSectionContainer";

export const HomeSectionFive: FC = () => {
  const router = useRouter();

  return (
    <HomeSectionContainer px={{ base: 8, md: 24 }}>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Text as="h1" marginBottom={10} textAlign="center">
          {"We look forward to connecting with you"}
        </Text>
        <Flex marginTop={10} gap={3}>
          <Button
            variant="client"
            onClick={() => router.push("/hire")}
            _hover={{ bg: "#153345", color: "white" }}
          >
            {"HIRE US"}
          </Button>
          <Button variant="nomad" onClick={() => router.push("/join")}>
            {"JOIN US"}
          </Button>
        </Flex>
      </Flex>
    </HomeSectionContainer>
  );
};

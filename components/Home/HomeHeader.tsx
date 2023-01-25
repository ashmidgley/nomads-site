import React, { FC } from "react";

import {
  Box,
  Button,
  Fade,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export const HomeHeader: FC = () => {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box role="banner" height={{ base: 660, md: 740 }} width="100%">
      <Flex
        height="100%"
        background={`url('${
          isMobile
            ? "/images/mobile/banner-landing.jpg"
            : "/images/desktop/banner-landing.jpg"
        }')`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="bottom right"
      >
        <Flex
          direction="column"
          paddingX={{ base: 8, md: "7.5rem" }}
          height="100%"
          justifyContent="center"
          mx="auto"
        >
          <Fade in>
            <Text as="h1">
              {
                "A radically different way to create a remarkable user experience"
              }
            </Text>
          </Fade>
          <Fade in>
            <Text as="h2" marginTop={10}>
              {
                "A global collective of talented creators delivering the best digital product"
              }
            </Text>
          </Fade>
          <Flex marginTop={16}>
            <Button variant="client" onClick={() => router.push("/hire")}>
              {"HIRE US"}
            </Button>
            <Button
              variant="nomad"
              onClick={() => router.push("/join")}
              marginLeft={3}
            >
              {"JOIN US"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

import React, { FC } from "react";

import { Box, BoxProps, Button, Fade, Flex, Text } from "@chakra-ui/react";

import { HeroHeaderAction } from "../types";

export interface HeroHeaderProps extends BoxProps {
  backgroundUrl: string;
  heading?: string;
  subtitle?: string;
  message?: string;
  actions?: HeroHeaderAction[];
  alignContent?: "left" | "center" | "right";
}

export const HeroHeader: FC<HeroHeaderProps> = ({
  backgroundUrl,
  heading = "",
  subtitle = "",
  message = "",
  actions = [],
  alignContent = "left",
  ...props
}) => (
  <Box role="banner" height={660} width="100%" {...props}>
    <Flex
      height="100%"
      background={`url(${backgroundUrl})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Flex
        direction="column"
        paddingX={{ base: 8, md: "15rem" }}
        height="100%"
        justifyContent="center"
        alignItems={alignContent}
        mx="auto"
      >
        <Fade in>
          <Text as="h1">{heading}</Text>
        </Fade>
        <Fade in>
          <Text as="h2" marginTop={10}>
            {subtitle}
          </Text>
        </Fade>
        {message && (
          <Fade in>
            <Text as="h3" marginTop={8}>
              {message}
            </Text>
          </Fade>
        )}
        {actions.length > 0 && (
          <Flex marginTop={16}>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant}
                onClick={action.callback}
                marginLeft={index > 0 ? 3 : 0}
              >
                {action.label}
              </Button>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  </Box>
);

import React, { FC } from "react";

import { Flex, FlexProps } from "@chakra-ui/react";

export const HomeSectionContainer: FC<FlexProps> = ({
  children = null,
  ...props
}) => (
  <Flex
    width="100%"
    height={{ base: 650, md: 740 }}
    justifyContent="center"
    px={{ base: 8, md: 48 }}
    {...props}
  >
    {children}
  </Flex>
);

import React, { FC } from "react";

import { Flex, FlexProps } from "@chakra-ui/react";

export const TestimonialCard: FC<FlexProps> = ({
  children = null,
  ...props
}) => (
  <Flex
    border="1.5px solid white"
    py={8}
    px={6}
    borderRadius="10px"
    mx={4}
    {...props}
  >
    {children}
  </Flex>
);

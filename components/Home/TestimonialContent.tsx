import React, { FC } from "react";

import { Flex, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  title: string;
  message: string;
}

export const TestimonialContent: FC<Props> = ({ name, title, message }) => (
  <Flex
    direction="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
  >
    <Text mb={2}>{name}</Text>
    <Text mb={3}>{title}</Text>
    <Text>{message}</Text>
  </Flex>
);

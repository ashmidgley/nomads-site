import React, { FC } from "react";

import { Flex, FlexProps } from "@chakra-ui/react";

interface PageContentProps extends FlexProps {
  mediumPaddingX?: number;
}

export const PageContent: FC<PageContentProps> = ({
  mediumPaddingX = 24,
  children = null,
  ...props
}) => (
  <Flex bg="white" py={{ base: 12, md: "7.5rem" }} width="100%">
    <Flex
      direction="column"
      px={{ base: 8, md: mediumPaddingX }}
      gap={8}
      {...props}
    >
      {children}
    </Flex>
  </Flex>
);

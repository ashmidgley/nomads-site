import React, { FC } from "react";

import { Flex, Link, LinkProps, Text } from "@chakra-ui/react";

export interface NavigationSidebarLinkProps extends LinkProps {
  href: string;
  label: string;
  node?: React.ReactNode;
  isActive?: boolean;
}

export const NavigationSidebarLink: FC<NavigationSidebarLinkProps> = ({
  href,
  label,
  isActive,
  ...props
}) => (
  <Link
    href={href}
    fontSize="25px"
    fontWeight={700}
    textDecoration={isActive ? "underline" : "initial"}
    _hover={isActive ? { color: "white" } : { textDecoration: "underline" }}
    {...props}
  >
    <Flex justifyContent="center">
      <Text ml={3}>{label}</Text>
    </Flex>
  </Link>
);

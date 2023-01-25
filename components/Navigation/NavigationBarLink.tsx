import React, { FC } from "react";

import { Flex, FlexProps, Link } from "@chakra-ui/react";

const activeLinkStyles = {
  color: "rgba(255, 255, 255, 0.3);",
};

export interface NavigationBarLinkProps extends FlexProps {
  href: string;
  isActive?: boolean;
  label: string;
}

export const NavigationBarLink: FC<NavigationBarLinkProps> = ({
  href,
  isActive = false,
  label,
  ...props
}) => (
  <Flex as="nav" {...props}>
    <Link
      {...(isActive ? activeLinkStyles : {})}
      href={href}
      fontSize="16px"
      fontWeight={600}
    >
      {label}
    </Link>
  </Flex>
);

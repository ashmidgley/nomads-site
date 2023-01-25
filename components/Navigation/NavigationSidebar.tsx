import React, { FC } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/react";

export interface NavigationSidebarProps extends DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationSidebar: FC<NavigationSidebarProps> = ({
  isOpen,
  children,
  onClose,
}) => (
  <Drawer placement="left" size="full" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent background="linear-gradient(0deg, #1E4D68 -22.29%, #090918 49.98%)">
      <DrawerBody marginTop={10}>{children}</DrawerBody>
    </DrawerContent>
  </Drawer>
);

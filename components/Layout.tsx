import { Flex, Text } from "@mantine/core";
import { IconAppWindow } from "@tabler/icons-react";
import React, { ReactNode } from "react";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Flex mx="sm" mt="sm" align="center" justify="space-between">
        <Flex gap="xs" align="center">
          <IconAppWindow size={32} />
          <Text mb="0" fz="lg" fw="bolder">
            Dynamic UI
          </Text>
        </Flex>
        <ColorSchemeToggle />
      </Flex>
      {children}
    </div>
  );
}

export default Layout;

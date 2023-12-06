import {
  Box,
  Flex,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconWand } from "@tabler/icons-react";
import React, { ReactNode } from "react";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Box w="100%" h="100%">
      <Flex
        w="100%"
        maw="110rem"
        pb="sm"
        mt="sm"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Flex gap="xs" align="center">
          <IconWand />
          <Text mb="0" fz="lg" fw="bolder">
            Dynamic UI
          </Text>
        </Flex>
        <ColorSchemeToggle />
      </Flex>
      {children}
    </Box>
  );
}

export default Layout;

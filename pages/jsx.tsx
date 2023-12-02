import { Card, Container, Flex, Text } from "@mantine/core";
import React from "react";
import JSXInput from "../components/JSXInput";

function Jsx() {
  return (
    <Container size="100rem">
      <Flex h="90vh" gap="lg">
        <JSXInput />
        <Card p="lg" shadow="sm" radius="md" withBorder w="100%">
          <Text size="lg" fw={600}>
            Output JSX from AI
          </Text>
          <Text size="sm" c="dimmed">
            The result for the AI is passed on to a JSX parser and rendered as
            output
          </Text>
        </Card>
      </Flex>
    </Container>
  );
}

export default Jsx;

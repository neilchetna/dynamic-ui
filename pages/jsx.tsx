import { Autocomplete, Card, Container, Flex, Text } from "@mantine/core";
import React from "react";

function Jsx() {
  return (
    <Container size="100rem">
      <Flex h="90vh" gap="lg">
        <Card p="lg" shadow="sm" radius="md" withBorder w="100%" h="90vh">
          <Text size="lg" fw={600}>
            Add you text
          </Text>
          <Text size="sm" c="dimmed">
            Enter a description about what you would like AI to render or add a
            JSON data
          </Text>
          <Autocomplete
            data={["Generate a 2x2 Grid of images from unsplash"]}
          />
        </Card>
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

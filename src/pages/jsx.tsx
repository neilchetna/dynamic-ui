import {
  Box,
  Card,
  Container,
  createStyles,
  Flex,
  Group,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCrystalBall } from "@tabler/icons-react";
import React, { useState } from "react";
import JSXInput from "../components/JSXInput";
import apiFactory from "../components/utils/api.factory";

const useStyle = createStyles((theme) => ({
  "empty-box": {
    border: "1px solid",
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.dark[4],
    borderRadius: theme.radius.sm,
  },
}));

function Jsx() {
  const matches = useMediaQuery("(min-width: 700px)");
  const { classes } = useStyle();

  const [generatedResponse, setGeneratedResponse] = useState();

  const api = apiFactory("code-generation");
  const handleTextSubmit = async (uiDescription: string) => {
    const response = await api.post({
      ui_description: uiDescription,
      language: "JSX",
    });

    setGeneratedResponse(response as any);
  };

  return (
    <Container mb={matches ? "xl" : ""} size="100rem">
      <Flex
        direction={matches ? "row" : "column"}
        h={matches ? "90vh" : "auto"}
        gap="lg"
      >
        <JSXInput onTextSubmit={handleTextSubmit} />
        <Card
          h={matches ? "auto" : "100vh"}
          p="lg"
          shadow="sm"
          radius="md"
          withBorder
          w="100%"
        >
          <Text size="lg" fw={600}>
            Output JSX from AI
          </Text>
          <Text size="sm" c="dimmed">
            The result for the AI is passed on to a JSX parser and rendered as
            output
          </Text>
          <Group
            className={classes["empty-box"]}
            mt="lg"
            h="90%"
            mih="200px"
            w="100%"
            position="center"
          >
            {generatedResponse ? (
              <div>{JSON.stringify(generatedResponse)}</div>
            ) : (
              <div>
                <Text align="center" color="dimmed">
                  <IconCrystalBall size="5rem" stroke={1} />
                </Text>
                <Text align="center" fz="lg">
                  Your creation will appear here
                </Text>
                <Text align="center" fz="sm" color="dimmed">
                  This might take few seconds to load.
                </Text>
              </div>
            )}
          </Group>
        </Card>
      </Flex>
    </Container>
  );
}

export default Jsx;

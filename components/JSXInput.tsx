import {
  Box,
  Card,
  Input,
  JsonInput,
  Tabs,
  Text,
  TextInput,
} from "@mantine/core";
import { IconCodeAsterix, IconCursorText } from "@tabler/icons-react";
import React from "react";

function JSXInput() {
  return (
    <Card p="lg" shadow="sm" radius="md" withBorder w="100%" h="90vh">
      <Box>
        <Text size="lg" fw={600}>
          Add you text
        </Text>
        <Text size="sm" c="dimmed">
          Enter a description about what you would like AI to render or add a
          JSON data
        </Text>
      </Box>
      <Tabs mt="sm" variant="outline" defaultValue="text">
        <Tabs.List>
          <Tabs.Tab icon={<IconCursorText size="0.8rem" />} value="text">
            Text
          </Tabs.Tab>
          <Tabs.Tab icon={<IconCodeAsterix size="0.8rem" />} value="json">
            JSON
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="json">
          <JsonInput
            minRows={25}
            maxRows={25}
            h="100%"
            label="Add your JSON here"
            placeholder={`{"data": ...}`}
            mt="md"
          />
        </Tabs.Panel>
        <Tabs.Panel value="text">
          <TextInput
            placeholder="Create a 2x2 image grid..."
            label="Describe what you want AI to generate"
            mt="md"
          />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}

export default JSXInput;

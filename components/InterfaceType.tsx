import { Box, Button, Card, CardSection, Flex, Text } from "@mantine/core";
import {
  IconCodeAsterix,
  IconExternalLink,
  IconMarkdown,
} from "@tabler/icons-react";
import React from "react";

type InterfaceTypeCardProps = {
  name: string;
  icon: JSX.Element;
  description: string;
};

function InterfaceType() {
  const InterfaceTypeCard = ({
    name,
    icon,
    description,
  }: InterfaceTypeCardProps) => (
    <Card p="lg" radius="md" w="100%" shadow="sm" withBorder>
      <Flex h="100%" direction="column" justify="space-between">
        <Box>
          <Flex gap="xs" align="center">
            {icon}
            <Text ff="monospace" fw={700} size="lg">
              {name}
            </Text>
          </Flex>
          <Text ff="monospace" c="dimmed" size="sm" mt="md">
            {description}
          </Text>
        </Box>
        <Button
          component="a"
          href="/jsx"
          color="gray"
          variant="outline"
          radius="md"
          leftIcon={<IconExternalLink size={16} />}
          mt="lg"
        >
          Try it out
        </Button>
      </Flex>
    </Card>
  );

  return (
    <Flex gap="lg" w="100%" mt="lg">
      <InterfaceTypeCard
        description={`
          Using a JSX parser on the frontend. 
          This method is good for generating 
          cards, blogs and also supports passing props
         `}
        icon={<IconCodeAsterix />}
        name="JSX renderer"
      />
      <InterfaceTypeCard
        description={`
          Using a markdown render in frontend, 
          this comes in handy to display tables,
          maths and codeblocks
        `}
        icon={<IconMarkdown />}
        name="Markdown renderer"
      />
    </Flex>
  );
}

export default InterfaceType;

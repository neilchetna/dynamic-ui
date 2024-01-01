import { Box, Button, Card, Chip, Flex, Text } from "@mantine/core";
import { IconCode, IconExternalLink, IconMarkdown } from "@tabler/icons-react";
import React from "react";

type InterfaceTypeCardProps = {
  name: string;
  icon: JSX.Element;
  description: string;
  disabled?: boolean;
};

function InterfaceType() {
  const InterfaceTypeCard = ({
    name,
    icon,
    description,
    disabled = false,
  }: InterfaceTypeCardProps) => (
    <Card p="lg" radius="md" w="100%" shadow="sm" withBorder>
      <Flex h="100%" direction="column" justify="space-between">
        <Box>
          <Flex gap="xs" align="center">
            {icon}
            <Text ff="monospace" fw={700} size="lg">
              {name}
            </Text>
            {disabled && (
              <Chip checked={false} color="gray" variant="outline">
                Coming soon
              </Chip>
            )}
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
          disabled={disabled}
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
        icon={<IconCode />}
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
        disabled
      />
    </Flex>
  );
}

export default InterfaceType;

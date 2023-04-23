import { Card, Text } from "@mantine/core";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function Welcome() {
  const WelcomeText = `
    Welcome! In this project, we explore how AI✨ can help us create dynamic interfaces.
    Imagine a tool that can analyze any dataset and automatically create an interface that best fits the data. 
    This could also come in handy in development. A tool for developers to create any interface using AI in minutes
    with no code or design needed.`;

  return (
    <Card radius="md" p="lg" shadow="sm" withBorder>
      <Text ff="mono">
        <TypeAnimation sequence={[WelcomeText]} wrapper="span" />
      </Text>
    </Card>
  );
}

export default Welcome;

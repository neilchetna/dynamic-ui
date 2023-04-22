import { Card, Container, Text } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";

export default function IndexPage({ ...props }) {
  const WelcomeText = `
    Hello this project about how can we achieve dynamic interfaces that can be generated with AI. 
    The idea behind this is that AI can return any type of custom data and it will return and kind
    of data and also generate a UI that best suits that data. This could also come in handy in development.
    A tool for developers to create any interface using AI in minutes.
  `;

  return (
    <Container size="md">
      <Card>
        <Text ff="mono">
          <TypeAnimation sequence={[WelcomeText]} wrapper="span" />
        </Text>
      </Card>
    </Container>
  );
}

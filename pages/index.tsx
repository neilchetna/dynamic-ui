import { Container } from "@mantine/core";
import InterfaceType from "../components/InterfaceType";
import Welcome from "../components/Welcome";

export default function IndexPage() {
  return (
    <Container size="md">
      <Welcome />
      <InterfaceType />
    </Container>
  );
}

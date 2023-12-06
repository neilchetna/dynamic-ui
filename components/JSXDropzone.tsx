import { Box, Group, Text } from "@mantine/core";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import { IconFile, IconUpload } from "@tabler/icons-react";
import React from "react";

type Props = {
  onDrop: DropzoneProps["onDrop"];
};

function JSXDropzone({ onDrop }: Props) {
  return (
    <Dropzone onDrop={onDrop}>
      <Group mih="200px" position="center">
        <Dropzone.Accept>
          <IconUpload size="3.2rem" color="#4dabf7" />
        </Dropzone.Accept>
        <Dropzone.Idle>
          <IconFile size="3rem" opacity={0.6} />
        </Dropzone.Idle>
        <Box>
          <Text fz="xl">Drag you JSON data here</Text>
          <Text fz="xs" color="dimmed">
            The file size cannot exceed 2MB
          </Text>
        </Box>
      </Group>
    </Dropzone>
  );
}

export default JSXDropzone;

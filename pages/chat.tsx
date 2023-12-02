import { Box, Button, Card, Flex, Input } from "@mantine/core";
import React, { useState } from "react";

function Chat() {
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([
    {
      isUser: false,
      chat: "Helo Are you down to f!, Helo Are you down to f!, Helo Are you down to f!, Helo Are you down to f!, Helo Are you down to f!",
    },
    {
      isUser: true,
      chat: "Helo Are you down to f!",
    },
    {
      isUser: false,
      chat: "Helo Are you down to f!",
    },
    {
      isUser: true,
      chat: "Helo Are you down to f!",
    },
  ]);

  const handleChatInput = () => {
    if (input) {
      setChats((prev) => [...prev, { chat: input, isUser: true }]);
      setInput("");
    }
  };

  return (
    <Flex>
      <Card withBorder mih="800px" w="600px" mx="auto">
        <Flex direction="column">
          <Box sx={{ flexGrow: 1, h: "100%" }}>Chat</Box>
          <Card>
            <Flex direction="column" gap="md">
              {chats.map((item, index) => (
                <Card
                  maw="50%"
                  bg={item.isUser ? "blue" : "gray"}
                  sx={{
                    width: "fit-content",
                    alignSelf: item.isUser ? "end" : "start",
                  }}
                  key={index}
                >
                  {item.chat}
                </Card>
              ))}
            </Flex>
          </Card>
          <Input
            onChange={(e) => setInput(e.target.value)}
            variant="filled"
            placeholder="Write your text"
            rightSection={<Button onClick={handleChatInput}>Send</Button>}
          />
        </Flex>
      </Card>
    </Flex>
  );
}

export default Chat;

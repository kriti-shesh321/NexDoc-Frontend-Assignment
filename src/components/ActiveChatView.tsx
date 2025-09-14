import { useChat } from "../context/ChatContext";
import {Box, Typography } from "@mui/material";
import type { Chat } from "../types/definitions";

const ActiveChatView = ({ chatId }: { chatId: number }) => {
  const { state } = useChat();
  const chat: Chat = state.chats.find((c: Chat) => c.id === chatId);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6">{chat?.title}</Typography>
      <Box sx={{ mt: 2 }}>
        {chat?.messages?.map(m => (
          <Box key={m.id} sx={{ mb: 2 }}>
            <Typography variant="caption">{m.role}</Typography>
            <Typography>{m.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ActiveChatView;
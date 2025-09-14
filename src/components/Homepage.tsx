import { Box, Container } from "@mui/material";

import Sidebar from "./Sidebar";
import Header from "./homepage/Header";
import NewChat from "./NewChat";
import Hero from "./homepage/Hero";
import ActiveChatView from "./ActiveChatView";

import { useChat } from "../context/ChatContext";

const Homepage = () => {
  const { state, createChat, setActiveChat, setComposerText } = useChat();
  const activeId = state.activeChatId;

  const handlePickPrompt = (prompt: string) => {
    if (!state.activeChatId) {
      const id = createChat();
      setActiveChat(id);
    }
    setComposerText(prompt);
  };

  const handleNewChat = () => {
    const id = createChat();
    setActiveChat(id);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", background: "#F8F9FC", justifyContent:"space" }}>
      <Sidebar />
      <Container sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "space-between", border: "1px solid #EBEBEB", borderRadius: 2 }}>
        <Header onNewChat={handleNewChat} onShare={() => { }} onInfo={() => { }} />
        <Box sx={{ width: { sm: "80%", lg: "70%" }, mx: "auto", flex: 1, overflow: "auto" }}>
          {activeId === null ? (
            <Hero onPick={handlePickPrompt} />
          ) : (
            <ActiveChatView chatId={activeId} />
          )}
        </Box>
        <Box sx={{ p: 2, width: { sm: "80%", lg: "70%" }, mx: "auto" }}>
          <NewChat />
        </Box>
      </Container>
    </Box>
  );
};
export default Homepage;
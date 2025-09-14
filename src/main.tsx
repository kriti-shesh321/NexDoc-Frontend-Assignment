import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import "@fontsource-variable/bricolage-grotesque/index.css";
import { ChatProvider, exampleChats } from "./context/ChatContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatProvider initialChats={exampleChats}>
      <App />
    </ChatProvider>
  </StrictMode>,
);

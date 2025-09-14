import React, { createContext, useContext, useReducer } from "react";
import type { Chat, Message, ChatsState as State, Action } from "../types/definitions";

export const exampleChats: Chat[] = [
    { id: 1, title: 'Write a Shakespearean sonnet about a cat', messages: [], createdAt: new Date("Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)"), updatedAt: new Date("Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)") },
    { id: 2, title: 'Renewable Energy Trends', messages: [], createdAt: new Date("Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)"), updatedAt: new Date("Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)") },
    { id: 3, title: 'Pitch a reality TV show', messages: [], createdAt: new Date("Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)"), updatedAt: new Date("Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)") },
    { id: 4, title: 'Describe a medieval jousting tournament', messages: [], createdAt: new Date("Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)"), updatedAt: new Date("Fri Mar 25 2022 05:30:00 GMT+0530 (India Standard Time)") },
];

const initialState: State = {
    chats: [],
    activeChatId: null,
    composer: { text: "", attachments: [] },
};

function formatSize(n: number) {
    if (n < 1024) return n + " B";
    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB";
    return (n / (1024 * 1024)).toFixed(2) + " MB";
}

const ChatContext = createContext<any | undefined>(undefined);

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "INIT_CHATS":
            return { ...state, chats: action.payload.chats };
        case "CREATE_CHAT": {
            const { id, title } = action.payload;
            const chat: Chat = { id, title: title ?? "New Chat", messages: [], createdAt: new Date(), updatedAt: new Date() } as Chat;
            return { ...state, chats: [chat, ...state.chats], activeChatId: id, composer: { text: "", attachments: [] } };
        }
        case "SET_ACTIVE_CHAT":
            return { ...state, activeChatId: action.payload.id, composer: { ...state.composer, text: "" } };
        case "SET_COMPOSER_TEXT":
            return { ...state, composer: { ...state.composer, text: action.payload.text } };
        case "ADD_ATTACHMENTS": {
            const newAttachments = action.payload.files.map((f) => ({
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                file: f,
                sizeLabel: formatSize(f.size),
            }));
            return { ...state, composer: { ...state.composer, attachments: [...state.composer.attachments, ...newAttachments] } };
        }
        case "REMOVE_ATTACHMENT":
            return { ...state, composer: { ...state.composer, attachments: state.composer.attachments.filter((a) => a.id !== action.payload.id) } };
        case "CLEAR_ATTACHMENTS":
            return { ...state, composer: { ...state.composer, attachments: [] } };

        case "SEND_MESSAGE": {
            const chatId = state.activeChatId;
            if (!chatId) return state;

            const msg: Message = {
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                content: action.payload.text,
                role: "user",
                timestamp: new Date(),
            } as Message;

            const chats = state.chats.map((c) => {
                if (c.id !== chatId) return c;
                const isFirst = !(c.messages && c.messages.length);
                const newTitle = isFirst ? (action.payload.text.length > 60 ? action.payload.text.slice(0, 57) + "..." : action.payload.text) : c.title;
                return { ...c, messages: [...(c.messages ?? []), msg], title: newTitle, updatedAt: new Date() };
            });

            return { ...state, chats, composer: { text: "", attachments: [] } };
        }

        case "PUSH_MESSAGE": {
            const { chatId, message } = action.payload;
            const chats = state.chats.map((c) => (c.id === chatId ? { ...c, messages: [...(c.messages ?? []), message], updatedAt: new Date() } : c));
            return { ...state, chats };
        }

        default:
            return state;
    }
}

export const ChatProvider: React.FC<{ initialChats?: Chat[]; children: React.ReactNode; }> = ({ initialChats = [], children }) => {
    const [state, dispatch] = useReducer(reducer, { ...initialState, chats: initialChats });

    const createChat = (title?: string) => {
        const nextId = state.chats.length ? Math.max(...state.chats.map((c) => Number(c.id))) + 1 : 1;
        dispatch({ type: "CREATE_CHAT", payload: { id: nextId, title } });
        return nextId;
    };

    const setActiveChat = (id: number | null) => dispatch({ type: "SET_ACTIVE_CHAT", payload: { id } });

    const setComposerText = (text: string) => dispatch({ type: "SET_COMPOSER_TEXT", payload: { text } });

    const addAttachments = (files: File[]) => dispatch({ type: "ADD_ATTACHMENTS", payload: { files } });

    const removeAttachment = (id: string) => dispatch({ type: "REMOVE_ATTACHMENT", payload: { id } });

    const clearAttachments = () => dispatch({ type: "CLEAR_ATTACHMENTS" });
    const sendMessage = (text: string) => {
        if (!state.activeChatId) return;
        dispatch({ type: "SEND_MESSAGE", payload: { text } });

        // simulating assistant reply after a short delay
        const chatId = state.activeChatId;
        setTimeout(() => {
            const assistantMsg: Message = {
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                content: "This is an assistant placeholder reply.",
                role: "assistant",
                timestamp: new Date(),
            } as Message;
            dispatch({ type: "PUSH_MESSAGE", payload: { chatId, message: assistantMsg } });
        }, 500 + Math.random() * 400);
    };

    return (
        <ChatContext.Provider
            value={{
                state,
                dispatch,
                createChat,
                setActiveChat,
                sendMessage,
                setComposerText,
                addAttachments,
                removeAttachment,
                clearAttachments,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const ctx = useContext(ChatContext);
    if (!ctx) throw new Error("useChat must be used inside ChatProvider");
    return ctx;
};
export type User = {
    id: number;
    name: string;
};

export type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
};

export type Chat = {
    id: number;
    title: string;
    messages: Message[];
    createdAt: Date;
    updatedAt: Date;
};

export type NavLinkType = {
    text: string;
    icon: React.ReactNode;
    link: string;
    caption: string;
};

export type AttachmentLocal = {
    id: string;
    file: File;
    sizeLabel: string;
};

export type ChatsState = {
    chats: Chat[];
    activeChatId: number | null;
    composer: { text: string; attachments: AttachmentLocal[]; };
};

export type Action =
    | { type: "INIT_CHATS"; payload: { chats: Chat[]; }; }
    | { type: "CREATE_CHAT"; payload: { id: number; title?: string; }; }
    | { type: "SET_ACTIVE_CHAT"; payload: { id: number | null; }; }
    | { type: "SET_COMPOSER_TEXT"; payload: { text: string; }; }
    | { type: "ADD_ATTACHMENTS"; payload: { files: File[]; }; }
    | { type: "REMOVE_ATTACHMENT"; payload: { id: string; }; }
    | { type: "CLEAR_ATTACHMENTS"; }
    | { type: "SEND_MESSAGE"; payload: { text: string; }; }
    | { type: "PUSH_MESSAGE"; payload: { chatId: number; message: Message; }; };


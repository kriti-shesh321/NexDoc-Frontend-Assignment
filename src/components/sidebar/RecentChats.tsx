import React, { useMemo } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import type { Chat } from '../../types/definitions';
import { useChat } from "../../context/ChatContext";

const RecentChats: React.FC<{ open: boolean; chats: Chat[]; query: string; }> = ({ open, chats, query }) => {
    const { setActiveChat } = useChat();

    const filtered = useMemo(() => {
        if (!query) return chats;
        return chats.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));
    }, [chats, query]);

    return (
        <Box sx={{ mt: 1 }}>
            {open && <Typography sx={{ fontWeight: 600, fontSize: "14px", color: "#272727" }}>Recent Chats</Typography>}
            <List sx={{ maxHeight: 220, overflow: 'auto' }}>
                {filtered.map((c) => (
                    <ListItem key={c.id} disablePadding>
                        <ListItemButton
                            sx={{ px: 0.25, py: 0.5, '&:hover': { backgroundColor: 'white', border: '1px solid #EBEBEB', borderRadius: 2 } }}
                            onClick={() => setActiveChat(Number(c.id))}
                        >
                            <ListItemText
                                primary={<Typography fontSize={12} color="#515151">{c.title}</Typography>}
                                secondary={open ? undefined : ''}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};


export default RecentChats;
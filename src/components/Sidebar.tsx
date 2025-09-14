import React, { useState } from 'react';
import type { NavLinkType, Chat } from '../types/definitions';
import { useChat } from "../context/ChatContext";

import { Drawer, Container, Toolbar, IconButton, Box } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import Logo from './sidebar/Logo';
import Search from './sidebar/Search';
import NavLinks from './sidebar/NavLinks';
import RecentChats from './sidebar/RecentChats';
import TryPro from './sidebar/TryPro';
import Profile from './sidebar/Profile';

import {
    ChatBubbleOvalLeftEllipsisIcon as ChatIcon,
    FolderIcon,
    ClockIcon,
    GlobeAmericasIcon
} from "@heroicons/react/16/solid";

const navlinks: NavLinkType[] = [
    {
        text: "Home",
        icon: <ChatIcon />,
        link: "/",
        caption: '⌘ H',
    },
    {
        text: "Library",
        icon: <FolderIcon />,
        link: "/library",
        caption: '⌘ T',
    },
    {
        text: "History",
        icon: <ClockIcon />,
        link: "/history",
        caption: '⌘ G',
    },
    {
        text: "Explore",
        icon: <GlobeAmericasIcon />,
        link: "/explore",
        caption: '⌘ L',
    }
];

const drawerWidth = 336;

const Sidebar: React.FC = () => {
    const { state } = useChat();
    const chats: Chat[] = state && state.chats;

    const [open, setOpen] = useState(true);
    const [query, setQuery] = useState('');

    const toggleDrawer = () => setOpen((prevState) => !prevState);

    return (
        <Drawer
            variant="permanent"
            open={open}
            sx={{
                height: "100%",
                width: open ? drawerWidth : 90,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open ? drawerWidth : 90,
                    transition: 'width 0.3s',
                    backgroundColor: '#F8F9FC',
                    borderRight: open ? 'none' : "0.5",
                },
            }}
        >
            <Container sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', py: 2, justifyContent: "space-between" }}>
                <Box>
                    <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: open ? 'space-between' : 'center' }}>
                        <Logo open={open} />
                        <IconButton onClick={toggleDrawer} size="small">
                            {open ? <ChevronLeft /> : <ChevronRight />}
                        </IconButton>
                    </Toolbar>

                    <Search open={open} value={query} onChange={setQuery} />

                    <NavLinks open={open} links={navlinks} />

                    {open && <RecentChats open={open} chats={chats} query={query} />}

                </Box>

                <Box>
                    <TryPro open={open} />
                    <Profile open={open} />
                </Box>
            </Container>
        </Drawer>
    );
};


export default Sidebar;
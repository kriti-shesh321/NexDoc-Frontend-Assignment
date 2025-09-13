import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Toolbar,
    Typography,
    Box,
    Container,
} from "@mui/material";
import {
    ChevronLeft,
    ChevronRight,
} from "@mui/icons-material";
import {
    ChatBubbleOvalLeftEllipsisIcon as ChatIcon,
    FolderIcon,
    ClockIcon,
    GlobeAmericasIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/16/solid";
import logo from '../assets/sidebar/logo.svg';
import logoText from '../assets/sidebar/logo-text.svg';


const drawerWidth = 336;

const navlinks = [
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

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            variant="permanent"
            open={open}
            sx={{
                width: open ? drawerWidth : 100,
                flexShrink: 0,
                justifyContent: 'center',
                padding: 0,
                "& .MuiDrawer-paper": {
                    width: open ? drawerWidth : 100,
                    boxSizing: "border-box",
                    transition: "width 0.3s",
                    backgroundColor: '#F8F9FC',
                },
            }}
        >
            <Container>
                <Toolbar
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: open ? "space-between" : "center",
                        px: 1,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: open ? 1 : 0 }}>
                        <img src={logo} alt="Logo" style={{ width: 36, height: 36 }} />

                        {open &&
                            <img src={logoText} alt="Logo Text" style={{ height: 28 }} />
                        }
                    </Box>
                    <IconButton onClick={toggleDrawer}>
                        {open ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </Toolbar>

                <List>
                    {navlinks.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemButton
                                component={NavLink}
                                to={item.link}
                                sx={{
                                    '&.active': {
                                        border: '4px solid',
                                        borderColor: '#F3F3F3',
                                        borderRadius: '20px',
                                    },
                                    px: 2,
                                }}
                            >
                                <ListItemIcon sx={{ width: '24px', height: '24px', color: '#989898' }}>
                                    {item.icon}
                                </ListItemIcon>
                                {open && <ListItemText primary={item.text} sx={{fontSize: '16px'}} />}
                                {open && <Typography sx={{ fontSize: '14px', color: '#515151', padding: 0.5, backgroundColor: '#F3F3F3', borderRadius: '3px' }}>{item.caption}</Typography>}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Container>
        </Drawer>
    );
};

export default Sidebar;
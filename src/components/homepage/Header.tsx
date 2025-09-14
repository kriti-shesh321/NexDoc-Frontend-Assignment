import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton, Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import chatGPTLogo from "../../assets/chatGPT-logo.svg";

type Props = {
    onNewChat: () => void;
    onShare?: () => void;
    onInfo?: () => void;
};

const Header: React.FC<Props> = ({ onNewChat, onShare, onInfo }) => {
    return (
        <AppBar position="sticky" elevation={0} color="transparent" sx={{ borderBottom: "1px solid #F0F0F0" }}>
            <Toolbar disableGutters sx={{ px: 2, height: 64 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, background: "#EBEBF1", pl: 0.5, borderRadius: 1 }}>
                    <img src={chatGPTLogo} alt="Logo" style={{ width: 20, height: 20 }} />
                    <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>ChatGPT 4</Typography>
                    <IconButton ><ChevronDownIcon style={{height: "16px"}}/></IconButton>
                </Box>

                <Box sx={{ flex: 1 }} />

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton onClick={onShare} aria-label="share"><ShareIcon /></IconButton>
                    <IconButton onClick={onInfo} aria-label="info"><InfoOutlinedIcon /></IconButton>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={onNewChat} size="small" sx={{ textTransform: "none" }}>
                        New Chat
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

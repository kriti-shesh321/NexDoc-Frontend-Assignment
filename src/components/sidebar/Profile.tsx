import React from 'react';
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import {
    ChevronUpDownIcon
} from "@heroicons/react/20/solid";

const Profile: React.FC<{ open: boolean; }> = ({ open }) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: open ? 'space-between' : 'center',
            mt: 2,
            p: 1,
            border: "1px solid #EBEBEB",
            borderRadius: "50%",
            ...open && { p: 2, borderRadius: 2 },
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ width: 28, height: 28 }}>LS</Avatar>
                {open && <Typography>Lawrence Cruz</Typography>}
            </Box>
            {open && (
                <IconButton size="small" aria-label="maximize">
                    <ChevronUpDownIcon style={{ height: "14px", color: "#515151" }} />
                </IconButton>
            )}
        </Box>
    );
};


export default Profile;
import React from 'react';
import { Box } from '@mui/material';
import logo from '../../assets/sidebar/logo.svg';
import logoText from '../../assets/sidebar/logo-text.svg';

const Logo: React.FC<{ open: boolean; }> = ({ open }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: open ? 1 : 0, width: "100%" }}>
            <img src={logo} alt="Logo" style={{ width: 36, height: 36 }} />

            {open &&
                <img src={logoText} alt="Logo Text" style={{ height: 28 }} />
            }
        </Box>
    );
};


export default Logo;
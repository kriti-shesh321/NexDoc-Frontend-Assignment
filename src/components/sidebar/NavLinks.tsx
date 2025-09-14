import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import type { NavLinkType } from '../../types/definitions';


const NavLinks: React.FC<{ open: boolean; links: NavLinkType[]; }> = ({ open, links }) => {
    return (
        <List>
            {links.map((item, index) => (
                <ListItem key={index} sx={{p: 0}}>
                    <ListItemButton
                        component={NavLink}
                        to={item.link}
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            ...(open
                                ? {
                                    '&.active': {
                                        border: '4px solid',
                                        borderColor: '#F3F3F3',
                                    },
                                    borderRadius: '20px',
                                    transition: 'background 0.15s',
                                }
                                : {
                                    '&:hover': { backgroundColor: 'transparent' },
                                }),
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                            <ListItemIcon sx={{
                                minWidth: 'auto',
                                height: '24px',
                                color: '#989898',
                                ".active &": {
                                    color: "#1976d2",
                                },
                                ...(!open && { py: 1})
                            }}>
                                {item.icon}
                            </ListItemIcon>

                            {open && <ListItemText primary={<Typography fontSize={12} color="#515151">{item.text}</Typography>} />}
                        </Box>
                        {open && (
                            <Typography sx={{ fontSize: '12px', color: '#515151', padding: 0.5, backgroundColor: '#F3F3F3', borderRadius: '3px' }}>{item.caption}</Typography>
                        )}
                    </ListItemButton>
                </ListItem>
            ))
            }
        </List >
    );
};


export default NavLinks;
import React from 'react';
import { Box, InputBase } from '@mui/material';
import {
  MagnifyingGlassIcon
} from "@heroicons/react/20/solid";


const Search: React.FC<{
  open: boolean;
  value: string;
  onChange: (v: string) => void;
}> = ({ open, value, onChange }) => {
  
  return (
    <Box
      component="form"
      sx={{ display: 'flex', alignItems: 'center', mt: 2, px: 1, borderRadius: 3, border: "2px solid #EBEBEB" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <MagnifyingGlassIcon style={{ color: "#989898", height: 20, margin: "auto 5 auto" }} />
      {open ? (
        <InputBase placeholder="Search for chats..." value={value} onChange={(e) => onChange(e.target.value)} sx={{ width: '100%', boxShadow: "none" }} />
      ) : null}
    </Box>
  );
};


export default Search;
import React, { useRef, useState } from "react";
import {
  IconButton,
  Box,
  Popover,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import type { AttachmentLocal } from "../types/definitions";

type Props = {
  attachments: AttachmentLocal[];
  onAdd: (files: File[]) => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
};

const FileUpload: React.FC<Props> = ({ attachments, onAdd, onRemove, onClearAll }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openPicker = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closePopover = () => setAnchorEl(null);

  const triggerFilePicker = () => inputRef.current?.click();

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const arr = Array.from(files);
    onAdd(arr);
  };

  return (
    <Box>
      <input
        ref={inputRef}
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={(e) => handleFiles(e.target.files)}
      />

      <IconButton
        aria-label="attachments"
        onClick={(e) => {
          triggerFilePicker();
          openPicker(e);
        }}
      >
        <AttachFileIcon style={{height: "18px", width: "auto"}}/>
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="subtitle2">Attached Files</Typography>
          <IconButton size="small" onClick={onClearAll} aria-label="clear all">
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <List dense sx={{ maxHeight: 200, overflow: "auto", mt: 1 }}>
          {attachments.length === 0 ? (
            <ListItem>
              <ListItemText primary="No attachments" />
            </ListItem>
          ) : (
            attachments.map((a) => (
              <ListItem key={a.id} sx={{ py: 0.5 }}>
                <ListItemText
                  primary={a.file.name}
                  secondary={a.sizeLabel}
                />
                  <IconButton edge="end" size="small" onClick={() => onRemove(a.id)} aria-label="remove">
                    <RemoveCircleOutlineIcon />
                  </IconButton>
              </ListItem>
            ))
          )}
        </List>
      </Popover>
    </Box>
  );
};

export default FileUpload;
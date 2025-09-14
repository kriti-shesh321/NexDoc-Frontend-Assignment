import { Box, InputBase, IconButton, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { CameraAlt } from "@mui/icons-material";
import FileUpload from "./FileUpload";
import { useChat } from "../context/ChatContext";

const NewChat: React.FC = () => {
  const { state, setComposerText, addAttachments, removeAttachment, clearAttachments, sendMessage } = useChat();
  const { composer } = state;

  const fileAddHandler = (files: File[]) => addAttachments(files);
  const fileRemoveHandler = (id: string) => removeAttachment(id);
  const clearAllHandler = () => clearAttachments();

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!composer.text.trim()) return;
    sendMessage(composer.text.trim());
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

        <Box component="form" onSubmit={submit} sx={{ flex: 1, display: "flex", gap: 1 }}>
          <InputBase
            placeholder="Write a message..."
            value={composer.text}
            onChange={(e) => setComposerText(e.target.value)}
            sx={{ flex: 1, px: 2, border: "1px solid #EBEBEB", borderRadius: 1 }}
            multiline
            maxRows={6}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "end", background: "#F3F3F3", borderRadius: "50%", p: 1 }}>
            <FileUpload attachments={composer.attachments} onAdd={fileAddHandler} onRemove={fileRemoveHandler} onClearAll={clearAllHandler} />
            <Typography variant="caption" sx={{ p: 0 }}>{composer.attachments.length}</Typography>
          </Box>
          <CameraAlt sx={{ display: "flex", alignItems: "end", background: "#F3F3F3", borderRadius: "50%", p: 1 }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: 2, mt: 1 }}>
          <Typography variant="caption">{composer.text.length} characters</Typography>
          <IconButton
            onClick={submit}
            color="primary"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "primary.main",
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <SendIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default NewChat;

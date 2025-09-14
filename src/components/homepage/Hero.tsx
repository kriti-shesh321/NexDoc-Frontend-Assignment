import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { SparklesIcon } from "@heroicons/react/16/solid";

type Prompt = { id: string; title: string; prompt: string; };
const prompts: Prompt[] = [
    { id: "p1", title: "Concise summary", prompt: "Give me a concise summary of this meeting transcript." },
    { id: "p2", title: "Product description", prompt: "Write a product description for a minimalist smartwatch." },
    { id: "p3", title: "Polite reply", prompt: "Provide a polite response to a customer asking for a refund." },
];

type Props = { onPick: (prompt: string) => void; };

const Hero: React.FC<Props> = ({ onPick }) => {
    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 6 } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>👋 Hi Laurence!</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, width: "80%" }}>What do you want to learn today?</Typography>

            <Grid container spacing={2}>
                {prompts.map((p) => (
                    <Grid component={String} key={p.id} item size={4} >
                        <Paper
                            role="button"
                            tabIndex={0}
                            onClick={() => onPick(p.prompt)}
                            onKeyDown={(e) => { if (e.key === "Enter") onPick(p.prompt); }}
                            elevation={1}
                            sx={{
                                p: 3, borderRadius: 2, cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between", gap:2, height: 150, background: "linear-gradient(125deg, #ecf2ffff, #f8e2f8ff )",
                                "&:hover": { boxShadow: 6, transform: "translateY(-4px)" }, transition: "all 150ms ease"
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "16px" }}>
                                <SparklesIcon style={{ color: "#96B6FF", height: "16px", background: "white", borderRadius: "50%" }} />
                            </Box>
                            <Typography variant="body2" sx={{ color: "#666" }}>{p.prompt}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Hero;

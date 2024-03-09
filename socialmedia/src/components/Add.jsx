import {
  Avatar,
  Box,
  Button,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import avatar from "../media/avatar.png";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import VideoCameraBackRoundedIcon from "@mui/icons-material/VideoCameraBackRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import SendIcon from "@mui/icons-material/Send";

function Add() {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500}>Trushar Mandaviya</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Write about the post :)"
            multiline
            rows={4}
          />
          <Stack direction="row" gap={1} mt={2} mb={3} mr={5}>
            <IconButton>
              <EmojiEmotionsRoundedIcon color="primary" />
            </IconButton>
            <IconButton>
              <ImageRoundedIcon color="primary" />
            </IconButton>
            <IconButton>
              <VideoCameraBackRoundedIcon color="primary" />
            </IconButton>
            <IconButton>
              <PersonAddAlt1RoundedIcon color="primary" />
            </IconButton>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ marginLeft: "20%" }}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;

import { Avatar, AvatarGroup, Box, List, Typography } from "@mui/material";
import React from "react";
import avatar from "../media/avatar.png";
import StandardImageList from "./common/ImageList";
import ListConversation from "./common/ListConversation";

function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ width: 370 }}>
        <Typography variant="h4" fontWeight={400} fontSize={18} p={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={5} sx={{ marginRight: 10 }}>
          <Avatar alt="Remy Sharp" src={avatar} />
          <Avatar alt="Travis Howard" src={avatar} />
          <Avatar alt="Cindy Baker" src={avatar} />
          <Avatar alt="Agnes Walker" src={avatar} />
          <Avatar alt="Trevor Henderson" src={avatar} />
        </AvatarGroup>
        <Typography variant="h4" fontWeight={400} fontSize={18} p={2}>
          Latest Photos
        </Typography>
        <StandardImageList />
        <Typography variant="h4" fontWeight={400} fontSize={18} p={2}>
          Latest Conversations
        </Typography>
        <ListConversation />
      </Box>
    </Box>
  );
}

export default RightBar;

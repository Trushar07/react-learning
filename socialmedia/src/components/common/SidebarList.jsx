import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function SidebarList(props) {
  console.log(props);
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItemButton>
    </ListItem>
  );
}

export default SidebarList;

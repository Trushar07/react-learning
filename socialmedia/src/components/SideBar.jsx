import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React from "react";
import SidebarList from "./common/SidebarList";

function SideBar(props) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <SidebarList icon={HomeRoundedIcon} text="Homepage" />
        <SidebarList icon={ArticleRoundedIcon} text="Pages" />
        <SidebarList icon={Groups2RoundedIcon} text="Groups" />
        <SidebarList icon={StorefrontRoundedIcon} text="Marketplace" />
        <SidebarList icon={Diversity3RoundedIcon} text="Friemds" />
        <SidebarList icon={SettingsRoundedIcon} text="Settings" />
        <SidebarList icon={AccountCircleRoundedIcon} text="Profile" />
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <DarkModeIcon />
            </ListItemIcon>
            <Switch
              onChange={(e) =>
                props.setmode(props.mode === "light" ? "dark" : "light")
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default SideBar;

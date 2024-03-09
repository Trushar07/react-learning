import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import avatar from "../../media/avatar.png";

const conversations = [
  {
    title: "Brunch this weekend?",
    from: "Remy Sharp",
    to: "Ali Connors",
    body: " — I'll be in your neighborhood doing errands this…",
  },
  {
    title: "Summer BBQ",
    from: "Travis Howard",
    to: "to Scott, Alex, Jennifer",
    body: "Wish I could come, but I'm out of town this…",
  },
  {
    title: "Oui Oui",
    from: "Cindy Baker",
    to: "Sandra Adams",
    body: " — Do you have Paris recommendations? Have you ever…",
  },
];

export default function ListConversation() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {conversations.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.from} src={avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.to}
                  </Typography>
                  {item.body}
                </React.Fragment>
              }
            />
          </ListItem>
          {index < conversations.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

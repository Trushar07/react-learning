import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import nature from "../../media/Zugpsitze_mountain.jpg";
import { Checkbox } from "@mui/material";

function Post(props) {
  return props.posts.map((item) => {
    return (
      <Card
        sx={{
          maxWidth: "100%",
          margin: 5,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={item.title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          width="20%"
          image={nature}
          alt="Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  });
}

export default Post;

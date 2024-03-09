import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import httpServices from "../services/httpServices";
import Post from "./common/Post";

const postsEndPoint = "https://jsonplaceholder.typicode.com/posts";
const photosEndPoint = "https://jsonplaceholder.typicode.com/photos";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchData(postsEndPoint, setPosts);
    fetchData(photosEndPoint, setPhotos);
  }, []);

  async function fetchData(url, set) {
    try {
      const { data } = await httpServices.get(url);
      set(data);
    } catch (error) {
      console.log("Error occurred while fetching data: ", error);
    }
  }
  return (
    <Box flex={4} p={2}>
      <Post posts={posts} photos={photos} />
    </Box>
  );
}

export default Feed;

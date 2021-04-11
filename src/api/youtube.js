import axios from "axios";

const KEY="AIzaSyAU8gJiBYT_2qF06Q9_S43qCUDyMeFZrOQ";


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
})

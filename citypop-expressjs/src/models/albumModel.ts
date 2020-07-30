import mongoose from "mongoose";
const baseUrl = "http://localhost:3000/api/";

const albumSchema = new mongoose.Schema({
  title: String,
  artist: String,
  cover: {
    type: String,
    get: (url) => {
      return `${baseUrl}${url}`;
    }
  },
  tracks: [
    {
      title: String,
      duration: String,
      titleTrack: Boolean
    }
  ],
  comments: { spotifyLink: String }
});

const album = mongoose.model("album", albumSchema);

export { album };

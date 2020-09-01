import mongoose, { Document, model } from "mongoose";
import { DOMAIN_NAME } from "utils/config";
const baseUrl = `${DOMAIN_NAME}/images/albumcovers/`;

interface Track {
  title: string;
  duration: string;
  titleTrack: boolean;
}
export interface AlbumSchema extends Document {
  title: string;
  artist: string;
  cover: string;
  tracks: Track[];
  comments?: { spotifyLink: string };
}

const albumSchema = new mongoose.Schema(
  {
    title: String,
    artist: String,
    cover: {
      type: String,
      get: (filename: string): string => {
        return `${baseUrl}${filename}`;
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
  },
  { toObject: { getters: true }, toJSON: { getters: true } }
);

const albumModel = model<AlbumSchema>("album", albumSchema);

export default albumModel;

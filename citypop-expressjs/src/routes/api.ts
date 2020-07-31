import express, { Request, Response, NextFunction } from "express";
import albumModel from "../models/albumModel";
import { asyncWrapper } from "../helpers";

const apiRoutes = express.Router();

apiRoutes.get(
  "/albums",
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const items = await albumModel.find({});
    res.json(items);
  })
);

// apiRoutes.get("/albums/new", async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const album = new albumModel({
//       artist: "MONDO GROSSO",
//       title: "Labyrinth",
//       cover: "LabyrinthMondoGrosso.jpg",
//       tracks: [{ title: "ラビリンス", duration: "4:54", titleTrack: true }],
//       comments: { spotifyLink: "https://open.spotify.com/album/1pHD8AFu4z1CvuTPjZFOFi" }
//     });
//     await album.save();
//     const items = await albumModel.find({});
//     console.log(items);
//     res.send("From API");
//   } catch (err) {
//     res.status(500);
//     res.end();
//     console.error("Caught Error", err);
//   }
// });

export default apiRoutes;

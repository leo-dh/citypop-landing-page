import express, { Request, Response, NextFunction } from "express";
import albumModel from "../models/albumModel";
import { asyncWrapper } from "../helpers";
import { albums } from "./data";

const apiRoutes = express.Router();

apiRoutes.get(
  "/albums",
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const limit = Number(req.query.limit) ? Number(req.query.limit) : 0;
    const items = await albumModel.find({}).limit(limit);
    res.json(items);
  })
);

apiRoutes.get(
  "/albums/new",
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    await albumModel.deleteMany({});
    await albumModel.insertMany(albums);
    // const album = new albumModel({
    //   artist: "dosii",)
    //   title: "dosii",
    //   cover: "170355-dosii.jpg",
    //   tracks: [
    //     { title: "Yeowool", duration: "4:25", titleTrack: false },
    //     { title: "Moon", duration: "2:22", titleTrack: false },
    //     { title: "Even so", duration: "2:44", titleTrack: false },
    //     { title: "starstarstar", duration: "3:38", titleTrack: false },
    //     { title: "Goyeol", duration: "4:27", titleTrack: false },
    //     { title: "lovememore.", duration: "3:52", titleTrack: true },
    //     { title: "Orbit of yours", duration: "3:54", titleTrack: false },
    //     { title: "Half Clear", duration: "4:26", titleTrack: false },
    //     { title: "Jogeum", duration: "3:37", titleTrack: false },
    //     { title: "To you", duration: "3:03", titleTrack: false }
    //   ],
    //   comments: { spotifyLink: "https://open.spotify.com/album/3sa814wrHO77FkSycZwhNf" }
    // });
    // await album.save();
    // const items = await albumModel.find({});
    // console.log(items);
    res.send("From API");
  })
);

export default apiRoutes;

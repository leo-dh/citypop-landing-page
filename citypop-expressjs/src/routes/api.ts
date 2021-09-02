import express, { Request, Response, NextFunction } from "express";
import albumModel, { AlbumSchema } from "../models/albumModel";
import { asyncWrapper } from "../utils/helpers";

const apiRoutes = express.Router();

apiRoutes.get(
  "/albums",
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const limit = Number(req.query.limit) ? Number(req.query.limit) : 0;
    const items = await albumModel.find({}, "-_id -__v -tracks._id").limit(limit);
    res.json(items);
  })
);

apiRoutes.post(
  "/albums/new",
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.album) res.end();
    const { artist, title, cover, tracks, comments } = req.body.album;
    const album = new albumModel({
      artist,
      title,
      cover,
      tracks,
      comments
    } as AlbumSchema);
    await album.save();
    res.sendStatus(200);
  })
);

export default apiRoutes;

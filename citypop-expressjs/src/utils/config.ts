import dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../../.env` });

export const PORT = process.env.PORT;
export const MONGODB_ATLAS_URI = process.env.MONGO_ATLAS_URI as string;

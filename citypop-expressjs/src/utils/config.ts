import dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../../.env` });

export const PORT = Number(process.env.PORT || 5500);
export const MONGODB_ATLAS_URI = process.env.MONGO_ATLAS_URI as string;
export const DOMAIN_NAME = process.env.DOMAIN_NAME || `http://localhost:${PORT}`;

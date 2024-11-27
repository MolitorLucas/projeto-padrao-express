import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import defaultRoutes from "../routes/default.routes";
import morgan from "morgan";
import helmet from "helmet";

export const registerRoutes: Function = (app: Application) => {
	app.use("/", defaultRoutes);
};

export const createApp: Function = (): Application => {
	const corsOptions: CorsOptions = {
		origin: process.env.FRONT_END_URL,
	};
	const app = express();
	app.use(morgan("tiny"));
	app.use(cors());
	app.use(helmet());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	return app;
};

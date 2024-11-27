import { Application } from "express";
import { registerRoutes, createApp } from "./src/main/config/app";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

const app: Application = createApp();
registerRoutes(app);
app
	.listen(PORT, () => {
		console.log(`Servidor em execução na porta ${PORT}`);
	})
	.on("error", (err: any) => {
		if (err.code === "EADDRINUSE") {
			console.log("Error: address already in use");
		} else {
			console.log(err);
		}
	});

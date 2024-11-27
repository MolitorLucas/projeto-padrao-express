import { Router, Request, Response } from "express";

class DefaultRoutes {
	router = Router();

	constructor() {
		this.intializeRoutes();
	}

	intializeRoutes() {
		this.router.get("/", (req: Request, res: Response) => {
			res.json({ message: "Funcionando!!!" });
		});
	}
}

export default new DefaultRoutes().router;

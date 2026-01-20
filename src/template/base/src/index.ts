import express, { type Request, type Response } from "express";
import cors from "cors";

// import exampleRoute from "./modules/test/routes/example.route"



const app = express();

app.use(express.json());
app.use(cors());
const baseRoute = "/api/v1"

app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).json({
    status_code: 200,
    active: true,
    name: "FumeHub",
  });
});



// app.use(baseRoute, exampleRoute);


export default app;
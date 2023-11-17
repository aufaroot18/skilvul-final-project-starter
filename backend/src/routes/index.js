import express from "express";
import { index, store } from "../controllers/ExampleController.js";

const exampleRoute = express.Router();

exampleRoute.get("/example", index);
exampleRoute.post("/example", store);

export default exampleRoute;

// news.mjs
import Newscontroller from "../app/Controllers/Newscontroller.mjs";
import express from 'express';

const route = express.Router();

route.get("/:slug",Newscontroller.showDetails)
route.get("/", Newscontroller.index);

export default route;


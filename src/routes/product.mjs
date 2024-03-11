// news.mjs
import ProductController from '../app/Controllers/productController.mjs';
import express from 'express';

const route = express.Router();


route.get("/:slug",ProductController.showDetailsProduct)
route.get("/", ProductController.index);

export default route;
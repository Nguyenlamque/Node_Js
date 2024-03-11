// index.mjs

import newsRouter from "./news.mjs";
import productRouter from "./product.mjs";

function route(app) {
    app.use("/news", newsRouter);
    app.use("/product", productRouter);

}

export default route;

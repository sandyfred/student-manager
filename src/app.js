import express from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/v1/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

app.use(errorHandler);

export default app;

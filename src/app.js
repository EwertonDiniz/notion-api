import express from "express";
import config from "./config/config.js";
import cors from "./middlewares/cors.js"; 
import helmet from "./middlewares/helmet.js";
import logger from "./middlewares/logger.js";
import limiter from "./middlewares/rate-limit.js";
import routes from "./routes/notion-routes.js";

const app = express();

// CORS
app.use(cors);

// Proteção contra ataques: Clickjacking, Cross-Site Scripting (XSS), Cross-Domain Embedder Policies.
app.use(helmet);

// Proteção contra ataques DDOS.
app.use(limiter);

// Middleware para log de requisições.
app.use(logger(config));

// Express.
app.use(express.json());

// Definição de rotas.
app.use("/api/notion/", routes);

export default app;

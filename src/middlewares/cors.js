import cors from "cors";

const corsMiddleware = cors({
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]  
});

export default corsMiddleware;

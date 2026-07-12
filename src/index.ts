import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "online",
        message: "Telegram Mail Platform API"
    });
});

export default app;

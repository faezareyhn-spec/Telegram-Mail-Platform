import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("====================================");
    console.log("🚀 Telegram Mail Platform Started");
    console.log(`🌐 Server : http://localhost:${PORT}`);
    console.log("====================================");
});

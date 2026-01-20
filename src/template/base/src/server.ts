import app from "./index";
import dotenv from "dotenv";

import Logger from "./helpers/logger";

dotenv.config();

const PORT = process.env.port || 5000;

Logger.info("Starting server...");

app.listen(PORT, () => {
  Logger.other(`Server running on http://localhost:${PORT}/api/v1`);
});

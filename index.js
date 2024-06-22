import app from "./app.js";
import colors from "colors";
import { PORT, DB_HOST } from "./config/config.js";

app.listen(PORT, () => {
  console.log(`Server is running on: http://${DB_HOST}:${PORT}`.bgMagenta);
});

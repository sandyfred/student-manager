import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

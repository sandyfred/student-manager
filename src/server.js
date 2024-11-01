import config from "./config.js";
import app from "./app.js";
import database from "./Database.js";

database
  .init(config)
  .then(() => {
    app.listen(config.app.port, () => {
      console.log(`Example app listening on port ${config.app.port}`);
    });
  })
  .catch((err) => {
    console.log("Error starting app", err);
  });

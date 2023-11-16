const express = require("express");
const app = express();
const router = require("./routes");
const { logger } = require("./logger");
require("dotenv").config();

app.use(express.json());
app.use(router);

(async function main() {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

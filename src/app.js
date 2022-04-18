const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const models = require("./models.js");
const controllers = require("../src/controllers.js");

async function createApp() {
  await models.init();
  const app = express();

  app.use(morgan("dev"));
  app.use(bodyParser.json());

  app.use("/api/v1", controllers);

  return app;
}

module.exports = {
  createApp,
};

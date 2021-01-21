const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

const createApp = () => {
  app.use(express.static(path.join(__dirname, "..", "public")));

  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = () => {
  const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

createApp();
startListening();

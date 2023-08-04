import express from "express";

const app = express();
const port = 8081;
const host = "localhost";

app.use(express.json());

app.listen(port, host, () => {
  console.log(`server REST API berjalan di http://${host}:${port}`);
});

import express from "express";
import * as SongService from "./services/song.js";

const app = express();
const port = 8081;
const host = "localhost";

app.use(express.json());

app.get("/songs", SongService.getSong);
app.post("/songs", SongService.addSong);
app.put("/songs/:id", SongService.updateSong);
app.delete("/songs/:id", SongService.deleteSong);
app.get("/songs/:id", SongService.getSongById);

app.listen(port, host, () => {
  console.log(`server REST API berjalan di http://${host}:${port}`);
});

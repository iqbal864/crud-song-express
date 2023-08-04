import * as SongRepository from "../repository/song.js";
import { respSuccess } from "../utils/response.js";

export const getSong = async (req, res, next) => {
  try {
    const [result] = await SongRepository.getAll();
    respSuccess(res, "success", result);
  } catch (error) {
    next(error);
  }
};

export const getSongById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [result] = await SongRepository.getById(id);
    respSuccess(res, "success", result[0]);
  } catch (error) {
    next(error);
  }
};

export const addSong = async (req, res, next) => {
  try {
    await SongRepository.createData(
      req.body.judul,
      req.body.artis,
      req.body.is_favorite
    );

    const [song] = [
      {
        judul: req.body.judul,
        artis: req.body.artis,
        is_favorite: req.body.is_favorite,
      },
    ];

    console.log(song);
    respSuccess(res, "berhasil menambahkan song", song, 201);
  } catch (error) {
    next(error);
  }
};

export const updateSong = async (req, res, next) => {
  try {
    const id = req.params.id;

    const song = await SongRepository.updateData(
      id,
      req.body.judul,
      req.body.artis,
      req.body.is_favorite
    );
    console.log(song);
    respSuccess(res, "berhasil mengupdate song", song, 201);
  } catch (error) {
    next(error);
  }
};

export const deleteSong = async (req, res, next) => {
  try {
    const id = req.params.id;
    const song = await SongRepository.deleteData(id);
    console.log(song);
    respSuccess(res, "berhasil menghapus song", song, 201);
  } catch (error) {
    next(error);
  }
};

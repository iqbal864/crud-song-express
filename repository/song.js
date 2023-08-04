import dbPool from "../utils/db.js";

export const getAll = () => {
  const sql = "SELECT * FROM songs";
  const result = dbPool.query(sql);
  return result;
};

export const getById = (id) => {
  const sql = "SELECT * FROM songs WHERE song_id = ?";
  const value = [id];
  const result = dbPool.query(sql, value);
  return result;
};

export const createData = (judul, artis, is_favorite) => {
  let createdAt = new Date();
  const sql =
    "INSERT INTO songs (judul, artis, is_favorite, created_at) VALUE (?, ?, ?, ?)";
  const value = [judul, artis, is_favorite, createdAt];

  return dbPool.query(sql, value);
};

export const updateData = (id, judul, artis, is_favorite) => {
  let updatedAt = new Date();
  const sql =
    "UPDATE songs SET judul = ?, artis = ?, is_favorite = ?, updated_at = ? where song_id = ?";
  const value = [judul, artis, is_favorite, updatedAt, id];
  const result = dbPool.query(sql, value);
  return result;
};

export const deleteData = (id) => {
  const sql = "DELETE FROM songs where song_id = ?";
  const result = dbPool.query(sql, [id]);

  return result;
};

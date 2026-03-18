import getConnection from "config/database";

const handleCreateUser = async (
  fullname: String,
  email: String,
  address: String,
) => {
  //insert into database
  const connection = await getConnection();
  try {
    const sql =
      "INSERT INTO `users`(`name`, `email`,`address`) VALUES (?, ?,?)";
    const values = [fullname, email, address];
    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
const getAllUsers = async () => {
  const connection = await getConnection();
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query("SELECT * FROM `users` ");
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
  return "ngocduong";
};

const handleDeleteUser = async (id: string) => {
  try {
    const connection = await getConnection();
    const sql = "DELETE FROM `users` WHERE `name` = ? ";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
const getUserById = async (id: string) => {
  try {
    const connection = await getConnection();
    const sql = "SELECT * FROM `users` WHERE `id` = ? ";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById };

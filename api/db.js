import mysql from "mysql";

export const db =mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Mars@1994",
  database:"blog"
})

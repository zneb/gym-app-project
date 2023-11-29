import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "gymapp",
  password: "password",
  port: 5432,
});

db.connect();

export { db };

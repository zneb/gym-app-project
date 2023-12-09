import express from "express";
import { db } from "./lib/db";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/exercises", async (req, res) => {
  const exercisesRes = await db.query("select * from exercises");
  res.json(exercisesRes.rows);
});

app.get("/progressions", async (_, res) => {
  const progressionsRes = await db.query("select * from progressions");
  res.json(progressionsRes.rows);
});

app.get("/routines", async (_, res) => {
  const routinesRes = await db.query("select * from routines");
  res.json(routinesRes.rows);
});

app.post("/auth", async (req, res) => {
  const { action, username, password } = req.body;

  if (username === "" || password === "") {
    res.json({ success: false, message: "Please enter all fields" });
    return;
  }

  if (action == "login") {
    const userRes = await db.query(`
      select * from users
      where username = '${username}' and password = '${password}'
    `);

    if (userRes.rowCount === 0) {
      res.json({ success: false, message: "Incorrect username or password" });
      return;
    }

    await db.query(`
      update users
      set sessionid = 
    `);

    res.json({ success: true, user: userRes.rows[0] });
    return;
  }

  if (action == "signup") {
    if (typeof username !== "string" || username.length < 3) {
      res.json({
        success: false,
        message: "Username must be atleast 3 characters long",
      });
      return;
    }

    if (typeof password !== "string" || password.length < 6) {
      res.json({
        success: false,
        message: "Password must be atleast 6 characters long",
      });
      return;
    }

    const newUserRes = await db
      .query(
        `
    insert into users (username, password)
    values
    ('${username}', '${password}');
    `
      )
      .catch(() => null);

    if (newUserRes === null) {
      res.json({
        success: false,
        message: "User with that name already exists",
      });
      return;
    }

    res.json({ success: true, user: newUserRes.rows[0] });
  }
});

app.use((_, res) => {
  res.status(404).send("404");
});

app.listen(3000, () => {
  console.log(`API Server listening on port: 3000 CTRL-C to Quit`);
});

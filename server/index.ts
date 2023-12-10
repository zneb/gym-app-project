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
      set sessionid = gen_random_uuid()
      where username = '${username}'
    `);

    const userSessionRes = await db.query(`
      select username, weight, height, sessionid from users
      where username = '${username}' and password = '${password}'
    `);

    res.json({ success: true, user: userSessionRes.rows[0] });
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
        insert into users (username, password, sessionid)
        values
        ('${username}', '${password}', gen_random_uuid());
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

    const userSessionRes = await db.query(`
      select username, weight, height, sessionid from users
      where username = '${username}'
    `);

    res.json({ success: true, user: userSessionRes.rows[0] });
  }
});

app.post("/update", async (req, res) => {
  const { sessionid, weight, height } = req.body;

  if (
    (weight !== null && typeof weight !== "number") ||
    weight >= 999 ||
    weight < 0
  ) {
    res.json({ success: false, message: "Weight is invalid" });
    return;
  }

  if (
    (height !== null && typeof height !== "number") ||
    height >= 999 ||
    height < 0
  ) {
    res.json({ success: false, message: "Height is invalid" });
    return;
  }

  await db.query(`
    update users
    set weight = ${weight.toFixed(1) || "NULL"}, height = ${
    height.toFixed(1) || "NULL"
  }
    where sessionid = '${sessionid}';
  `);

  const measuresRes = await db.query(`
    select weight, height from users
    where sessionid = '${sessionid}'
  `);

  res.json({
    success: true,
    message: "Updated successfully",
    ...measuresRes.rows[0],
  });
});

app.use((_, res) => {
  res.status(404).send("404");
});

app.listen(3000, () => {
  console.log(`API Server listening on port: 3000 CTRL-C to Quit`);
});

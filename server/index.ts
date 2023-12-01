import express from "express";
import { db } from "./lib/db";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/exercises", async (req, res) => {
  const exercisesRes = await db.query("select * from exercises");
  res.json(exercisesRes.rows);
});

app.get("/progressions", async (req, res) => {
  const progressionsRes = await db.query("select * from progressions");
  res.json(progressionsRes.rows);
});

app.get("/routines", async (req, res) => {
  const routinesRes = await db.query("select * from routines");
  res.json(routinesRes.rows);
});

app.use((req, res) => {
  res.status(404).send("404");
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else {
    console.log(`API Server listening on port: 3000 CTRL-C to Quit`);
  }
});

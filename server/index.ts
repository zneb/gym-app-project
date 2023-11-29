import express from "express";
import { db } from "./lib/db";

const app = express();

app.get("/exercises", async (req, res) => {
  const exercisesRes = await db.query("select * from exercises");
  res.json(exercisesRes.rows);
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

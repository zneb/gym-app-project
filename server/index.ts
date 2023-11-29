import express from "express";

const app = express();

app.use((req, res) => {
  res.status(404).send("404");
});

app.get("/", (req, res) => {
  res.send("res");
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else {
    console.log(`API Server listening on port: 3000 CTRL-C to Quit`);
  }
});

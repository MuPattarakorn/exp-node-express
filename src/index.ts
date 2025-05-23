import express, { Request, Response } from "express";

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

// --------------------------- First Get api ---------------------------

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World naja!");
});

app.get("/mu", (req, res) => {
  res.send("Hello Mu!");
});

// --------------------------- Modules ---------------------------

// ---------------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

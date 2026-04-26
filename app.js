const express = require("express");
const app = express();

app.get("/fast", (req, res) => {
  res.send("Hello World");
});

app.get("/cpu", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  res.send("CPU Task Done");
});

app.get("/io", async (req, res) => {
  await new Promise(r => setTimeout(r, 200));
  res.send("IO Task Done");
});

app.listen(3000, () => console.log("Server running"));





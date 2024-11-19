const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/posts", (req, res) => {
  const posts = [
    {
      titolo: "torta",
      contenuto: "cnsnlf",
      immagine: "./images/",
      tags: [""],
    },
    {
      titolo: "torta",
      contenuto: "cnsnlf",
      immagine: "./images/",
      tags: [""],
    },
    {
      titolo: "torta",
      contenuto: "cnsnlf",
      immagine: "./images/",
      tags: [""],
    },
    {
      titolo: "torta",
      contenuto: "cnsnlf",
      immagine: "./images/",
      tags: [""],
    },
    {
      titolo: "torta",
      contenuto: "cnsnlf",
      immagine: "./images/",
      tags: [""],
    },
  ];

  res.json(posts);
});

app.get("/bacheca", (req, res) => {
  res.send("");
});

app.listen(port, () => {
  console.log("Server online sulla porta " + port);
});

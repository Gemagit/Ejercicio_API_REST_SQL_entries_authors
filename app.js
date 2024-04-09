const express = require("express");
//importo express al archivo
const app = express();
const port = 3000;

// Rutas
const entriesRoutes = require("./routes/entries.routes")
//const authorRoutes = require("./routes/author.routes")

//Middlewares
app.use(express.json());//para parsear el body de las peticiones


// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Home. Welcome to backend!");
});

/* // PUT http://localhost:3000/entries
app.put("/entries", (req, res) => {
  const entry = req.params.entry;
  res.status(200).send("Se ha editado una entry" + entry );
}); */



//API
app.use('/api/entries',entriesRoutes);
//app.use('/api/author',authorRoutes);

// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });
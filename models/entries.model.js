const pool = require('../config/db_pgsql');
const queries=require('../queries/entry.queries');

  // GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, date, category,name, surname,image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, date, category,name, surname,image ])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const editEntries = async (entry) => {
    const { title, content, date, category, email, old_title} = entry;
    let client, result;
    try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.editEntries, [
        title,
        content,
        date,
        category,
        email,
        old_title
      ]);
      result = data.rowCount;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
    return result;
  };

// DELETE
const deleteEntries = async (title) => {
    let client, result;
    try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.deleteEntriesByTitle, [title]);
      result = data.rows;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
    return result;
  };

const entries = {
    getEntriesByEmail,
    getAllEntries,
    editEntries,
    createEntry,
    deleteEntries
}

module.exports = entries;


// Pruebas
/*
getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data))
*/

/*
getAllEntries()
.then(data=>console.log(data))
*/


/* let newEntry = {
"title": "noticia desde Node",
"content": "va a triunfar esto2",
"date": "2022-03-20T23:00:00.000Z",
"category": "sucesos",
"name": "Alejandru",
"surname": "Regex",
"image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
}

createEntry(newEntry)
    .then(data => console.log(data)) */

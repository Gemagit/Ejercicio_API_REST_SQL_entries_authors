const author = require('../models/author.model'); // Importar el modelo de la BBDD



//CREATE
const createAuthor= async (req,res) => {
    const newAuthors = req.body; // {title,content,email,category}
    const response = await author.createAuthors(newAuthors);
    res.status(201).json({
        "autoresCreados": response,
        data: newAuthors
    });
}


// READ
const getAuthor = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await entry.getAuthorByEmail(req.query.email);
    }
    else {
        authors = await author.getAuthorByEmail();
    }
    res.status(200).json(authors); // [] con los autores encontradas
}


// UPDATE
const editAuthor = (req, res) => {
    res.status(200).send({message: "usuario actualizado: guillermu@thebridgeschool.es"});
}

// DELETE
const deleteAuthor = (req, res) => {
    res.status(200).send({message: "Se ha borrado guillermu@thebridgeschool.es"});
}

module.exports = {
    getAuthor,
    createAuthor,
    editAuthor ,
    deleteAuthor
}
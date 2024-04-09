const entry = require('../models/entries.model'); // Importar el modelo de la BBDD



//CREATE
const createEntries= async (req,res) => {
    const newEntries = req.body; // {title,content,email,category}
    const response = await entry.createEntries(newEntries);
    res.status(201).json({
        "entradasCreadas": response,
        data: newEntries
    });
}


// READ
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}


// UPDATE
const editEntries = async (req, res) => {
    const modifiedEntry = req.body; // {title,content,date,category,email,old_title}
    const response = await entry.editEntries(modifiedEntry);
    res.status(200).json({
        "items_updated": response,
        data: modifiedEntry
    });
}

// DELETE
const deleteEntries = async (req, res) => {
    await entry.deleteEntries(req.params.title);
    res.status(200).send({message: "Se ha borrado la entry 'Título de noticia' "});
}

module.exports = {
    createEntries,
    getEntries,
    editEntries,
    deleteEntries 
}
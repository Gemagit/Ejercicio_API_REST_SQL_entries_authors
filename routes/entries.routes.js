const router = require('express').Router(); // objeto de rutas
const entriesController = require('../controllers/entries.controller.js'); // Importar el controlador. Representa el objeto con métodos que manejan las peticiones


// GET http://localhost:3000/api/entries
router.get('/', entriesController.getEntries);

// GET http://localhost:3000/api/entries
router.post('/', entriesController.createEntries);

// PUT http://localhost:3000/api/entries
router.put('/', entriesController.editEntries);

// DELETE http://localhost:3000/api/entries
router.delete('/:title', entriesController.deleteEntries)


module.exports = router;

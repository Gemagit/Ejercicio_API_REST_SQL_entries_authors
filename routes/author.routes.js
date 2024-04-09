const router = require('express').Router(); // objeto de rutas
const authorController = require('../controllers/author.controller.js'); // Importar el controlador. Representa el objeto con métodos que manejan las peticiones


// GET http://localhost:3000/api/authors?
router.get('/:authors?', authorController.getAuthor);
router.get('/', authorController.getAuthor);

// POST http://localhost:3000/api/author
router.post('/', authorController.createAuthor);

// PUT http://localhost:3000/api/author
router.put('/', authorController.editAuthor);

// DELETE http://localhost:3000/api/author
router.delete('/', authorController.deleteAuthor);


module.exports = router;
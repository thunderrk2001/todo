const express = require('express');
const router = express.Router();
const { addTodo, deleteTodo, updateTodo, showAllTodo } = require('../controllers/todoCt');
router.get('/', showAllTodo);
router.post('/add', addTodo);
router.post('/update', updateTodo);
router.post('/delete', deleteTodo);
module.exports = router
const { addTodoService, showAllTodoService } = require('../services/crudTodo');
const addTodo = async(req, res) => {
    try {
        const data = await addTodoService(req.body);
        res.status(200).send({
            success: false,
            'data': data,
            error: null
        })
    } catch (e) {
        console.log(e)
        res.status(500).send({
            success: false,
            data: null,
            error: e
        })
    }
};
const deleteTodo = async(req, res) => {

};
const updateTodo = async(req, res) => {

};
const showAllTodo = async(req, res) => {
    try {
        const data = await showAllTodoService();
        return res.status(200).send({
            success: true,
            error: null,
            'data': data
        });
    } catch (e) {
        console.log(e)
    }
}
module.exports = { addTodo, deleteTodo, updateTodo, showAllTodo };
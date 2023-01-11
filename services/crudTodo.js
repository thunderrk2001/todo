const model = require('../models/todoModel')
const addTodoService = async(data) => {
    console.log(data)
    const d = await model(data).save();
    return d;
}
const showAllTodoService = async() => {
    const d = await model.find({}).lean();
    return d;
}
module.exports = { addTodoService, showAllTodoService };
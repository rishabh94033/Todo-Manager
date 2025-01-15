const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://admin:BC9ykgsyILEwRGfT@cluster0.cy0b4.mongodb.net/todo-app")

const todoschema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}) 
const todos= mongoose.model('todos', todoschema)

module.exports = { todos };
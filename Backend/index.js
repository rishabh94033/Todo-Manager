const express=require("express")
const app=express()
const { todos } =require('./db');
const  todofunctions =require( './types')
app.use(express.json())
const cors= require("cors");
// const { Todo } = require("../frontend/src/components/Todo");
app.use(cors())
app.post("/todo", async function(req,res){
    const bodypayload= req.body
    const parsedpayload= todofunctions.createTodo.safeParse(bodypayload);
    if(!parsedpayload.success){
        res.status(411).json({
            messagae:"you send wrong body"
        })
        return;
    }
   await todos.create({
        title:bodypayload.title,
        description:bodypayload.description,
        completed: false
    })
    res.json({
        message:"Todo created"
    })
})
app.get("/todos", async function(req,res){
    const todosall= await todos.find({})
res.json(todosall);
})

app.put("/completed", async function(req,res){
    const updatepayload= req.body
    const parsedpayload= todofunctions.updateTodo.safeParse(updatepayload);
    if(!parsedpayload.success){
        res.status(411).json({
            messagae:"you send wrong id"
        })
        return;
    }
    await todos.updateOne({
        _id: updatepayload.id
    },{
        completed:true
    })
res.json({
    message:"Maked as completed"
})
})

app.delete("/todos/:idoftodo", async function(req,res){
    const todoid= req.params.idoftodo
    const deletedtodo= await todos.findByIdAndDelete(todoid);
    if (deletedtodo) {
        // If deletion was successful, respond with a success message
        res.status(200).json({ message: 'Todo deleted successfully' });
}})


app.listen(3000);
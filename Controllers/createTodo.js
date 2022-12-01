// Create Todo Controller

import Todo from "../Models/Todo";

export const createTodo = async (req, res) =>{
    const newTodo = new Todo({
        title : req.body,
    });
    
    try {
        const createdNewTodo = await newTodo.save();
        res.json(createdNewTodo);

    } catch (error) {
        res.status(401).send("New Todo Cannot Be Created.");
        console.log(error);
    };
    
};


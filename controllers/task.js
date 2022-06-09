const { findOneAndDelete } = require('../models/task')
const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/customs-error')

const getallTaskd = asyncWrapper( async(req, res)=>{
    
        const task = await Task.find({})
        res.status(200).json({status: "success", data:{ task, nbHits: task.length }})
    
})

const createTask = asyncWrapper(async (req,res)=>{

    
    const task = await Task.create(req.body)
    res.status(200).json({task})
    
})
const getTask =asyncWrapper (async (req,res)=>{

        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID}) 
        
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`),400)
        }
        res.status(200).json({ task})
    
})
const updateTask =asyncWrapper(async(req,res)=>{

    
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body ,{
            new:true,runValidators:true
        })
        res.status(201).json({task})
})
const deleteTask =asyncWrapper(async (req,res)=>{

        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`),400)
        }

        res.status(200).json( {task})

    
}) 

module.exports = {
    getallTaskd,
    getTask,
    updateTask,
    deleteTask,
    createTask
}
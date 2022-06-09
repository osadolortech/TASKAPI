const express = require('express')
  
const router = express.Router()
const {getallTaskd,getTask,updateTask,deleteTask,createTask} = require('../controllers/task')

router.route('/').get(getallTaskd).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
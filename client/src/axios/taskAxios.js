import axios from "axios"
// import { updateTask } from "../../../api/src/model/taskModel"
// import taskRouter from "../../../api/src/router/taskRouter"

// This file sends api request for task resource
const API_BASE_URL = 'http://localhost:8000'
const TASK_ENPOINT = '/api/tasks'

// FRONTEND CRUD OPERATIONS
// Sending Request

// GET | Get all the task
export const getTasks = () => {
  const response = axios
                    .get(API_BASE_URL+TASK_ENPOINT)
                    .then(res => res.data)
                    .catch(error => error)

  return response
}

// POST | Create a task
export const createTask = (taskObject) => {
  const response = axios
                    .post(API_BASE_URL+TASK_ENPOINT, taskObject)
                    .then(res => res.data)
                    .catch(error => error)

  return response
}



// // UPDATE | PATCH single Task
// taskRouter.patch("/:id", (req, res) => {
//   const udpatedTaskObject = req.body
//   const id = req.params.id

//   updateTask(id, udpatedTaskObject)
//     .then(task => {
//       res.json({
//         status: "success",
//         message: "Task Updated",
//         data: task
//       })
//     })
//     .catch(error => {
//       res.json({
//         status: "error",
//         error: error.message || 'Could not create task'
//       })
//     })
// })





// DELETE | Delete a task
export const deleteTaskRequest = (id) => {
  const response = axios
                    .delete(API_BASE_URL+TASK_ENPOINT+ `/${id}`)
                    .then(res => res.data)
                    .catch(error => error)

  return response
}
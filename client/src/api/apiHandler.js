import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  getAllTasks(tasks) {
    return service
      .get("/api/tasks", tasks)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneTask(taskId) {
    return service
      .get(`/api/tasks/${taskId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateTask(taskId, updatedTask) {
    service
      .patch(`/api/tasks/update/${taskId}`, updatedTask)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createTask(task) {
    service
      .post("/api/tasks/newTask", task)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteTask(task) {
    service
      .delete(`/api/tasks/deleteTask/${task._id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // getItems() {
  //   return service
  //     .get("/api/items")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },
};

export default apiHandler;

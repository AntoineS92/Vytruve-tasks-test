const express = require("express");
const router = express.Router();

const Tasks = require("../models/Task");

//show the list of all tasks
router.get("/", (req, res) => {
  Tasks.find()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Tasks.findById(req.params.id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => console.log(err));
});

router.patch("/update/:id", (req, res) => {
  -Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedTask) => {
      res.status(200).json(updatedTask);
    })
    .catch((err) => console.log(err));
});

router.post("/newTask", (req, res) => {
  const newTask = { ...req.body };

  Tasks.create(newTask)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch((err) => console.log(err));
});

router.delete("/deleteTask/:id", (req, res) => {
  Tasks.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("Task succesfully deleted")
      res.sendStatus(204);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

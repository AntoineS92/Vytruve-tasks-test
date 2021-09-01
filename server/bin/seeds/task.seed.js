require("dotenv").config();
require("../../config/dbConnection");
const TaskModel = require("../../models/Task");

const tasks = [
  {
    title: "React",
    description: "create a small react application",
    status: "New",
  },
  {
    title: "Node JS",
    description: "create a Node.js REST API",
    status: "In Progress",
  },
  {
    title: "GitHub",
    description: "Post the work on a github repo",
    status: "New",
  },
  {
    title: "Hired",
    description: "Get a nice message from the Vytruve team ! :)",
    status: "In Review",
  },
];

(async () => {
  await TaskModel.collection.drop().catch((err) => {});
  TaskModel.insertMany(tasks)
    .then((dbSuccess) => {
      console.log(
        `Seed done successfully : ${dbSuccess.length} documents inserted !`
      );
    })
    .catch((error) => console.log(error));
})();

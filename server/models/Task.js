const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["New", "In Progress", "In Review", "done"] },
});

const User = mongoose.model("Task", taskSchema);

module.exports = User;

import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

const UpdateTaskForm = (props) => {
  const taskId = props.match.params.taskId;
  console.log("taskId", taskId);

  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
    status: "",
  });

  async function getData() {
    const data = await apiHandler.getOneTask(taskId);
    setFormInputs(data);
    console.log(formInputs);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handleSubmit");

    apiHandler.updateTask(taskId, formInputs);
    

  };

  const handleChange = (e) => {
    console.log("handleChange");

    const value = e.target.value;
    const key = e.target.name;

    setFormInputs((prevalue) => {
      return {
        ...prevalue,
        [key]: value,
      };
    });

    console.log(formInputs);
  };

  return (
    <div className="form-container">
      <form className="newTaskForm" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title: </label>
          <input
            className="input"
            onChange={(e) => handleChange(e)}
            type="text"
            value={formInputs.title}
            id="title"
            name="title"
          />
        </div>

        <div className="field">
          <label className="label">Description: </label>
          <input
            className="input"
            onChange={(e) => handleChange(e)}
            type="text"
            value={formInputs.description}
            id="description"
            name="description"
          />
        </div>

        <div className="field">
          <label className="label">Status: </label>
          <div className="control">
            <select
              className="select"
              onChange={(e) => handleChange(e)}
              type="text"
              value={formInputs.status}
              id="status"
              name="status"
            >
              <option value="" disabled>
                please chose an option
              </option>
              <option value="New">New</option>
              <option value="In Progress">In progress</option>
              <option value="In Review">In review</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>

        <button className="button is-link">Udpate</button>
      </form>
    </div>
  );
};

export default UpdateTaskForm;

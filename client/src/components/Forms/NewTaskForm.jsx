import React, { Component, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

const NewTaskForm = () => {
  const [formInputs, setFormInput] = useState({
    title: "",
    description: "",
    status: "",
  });

  console.log(formInputs);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formInputs);

    const newTask = formInputs;

    apiHandler.createTask(newTask);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;

    setFormInput((prevalue) => {
      return {
        ...prevalue,
        [key]: value,
      };
    });
    console.log("Forminput", formInputs);
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

        <button className="button is-link">Create</button>
      </form>
    </div>
  );
};

export default NewTaskForm;

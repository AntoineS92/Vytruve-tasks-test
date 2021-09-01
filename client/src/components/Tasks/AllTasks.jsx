import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

const allTasks = (props) => {
  console.log(props.allTasks);

  const deleteTask = (e, task) => {
    console.log(e.currentTarget, task._id);
    apiHandler.deleteTask(task);
  };

  return (
    <div className="all-tasks">
      <div className="allTasksContainer">
        {props.allTasks &&
          props.allTasks.map((task) => {
            return (
              <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                  <p className="title">{task.title}</p>
                  <p className="content">{task.description}</p>
                  <article>
                    <span>Status : </span>
                    <p className="tag is-light">{task.status}</p>
                  </article>
                  <div>
                    <Link
                      className="button is-link"
                      id="updateButton"
                      to={{ pathname: `/updateTask/${task._id}` }}
                    >
                      Update
                    </Link>

                    <button
                      className="button is-danger"
                      id="deleteButton"
                      onClick={(e) => deleteTask(e, task)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default allTasks;

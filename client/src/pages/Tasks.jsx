import React, { useState, useEffect } from "react";
import apiHandler from "../api/apiHandler";

import AllTasks from "../components/Tasks/AllTasks"

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  //this function is here to fetch the data
  //I wrote it in a dedicated function for readibilty purposes
  async function getData() {
    const data = await apiHandler.getAllTasks();
    setTasks(data)
    console.log(tasks);
  }

  useEffect(() => {
    //we fetch the data from the apiHandler on load
    getData()
  }, []);

  return (
    <div>
      <AllTasks allTasks={tasks}/>
    </div>
  );
};

export default Tasks;

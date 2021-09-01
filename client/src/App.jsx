import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import newTaskForm from "./components/Forms/NewTaskForm"
import updateTaskForm from "./components/Forms/UpdateTaskForm"

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/newTask" component={newTaskForm}/>
        <Route exact path="/updateTask/:taskId" component={updateTaskForm}/>
      </Switch>
    </div>
  );
}

export default App;

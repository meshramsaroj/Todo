import "./App.css";
import {Button} from 'reactstrap'
import logo from "./t.png";
import React from "react";
import TodoItem from "./component/TodoItem";

function App() {
  return (
    <div className="App">
     <h1 className="logo">ToDo</h1>
     <div className="container">
		 <hr/>

			 {/* <img src={logo} className="img-logo" /> */}
		 <h1 className="label">To-Do</h1>


			<TodoItem />

		 </div>

    </div>
  );
}

export default App;

import React, { Component } from "react";
import "../App.css";
import { Button } from "reactstrap";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoValue){
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div className="App-box">
        Add an Item...
        <input
          type="text"
          className="input-text input"
          placeholder="write to do"
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
        />
        <Button
          color="success"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
        >
          Add todo
        </Button>
        <div >
          <ul>
            {this.state.list.map(item => {
              return (
              <div className="list-box" key={item.id}>
								  <li key={item.id} className="list">
                  <input
                    type="checkbox"
                    name="isDone"
                    checked={item.isDone}
                    onChange={() => {}}
                  />
                  {item.value}
                  <button className="btn1" onClick={()=>this.deleteItem(item.id)}>
                    Delete
                  </button>
                </li>
							</div>
              );
            })}

          </ul>
        </div>
      </div>
    );
  }
}

export default TodoItem;

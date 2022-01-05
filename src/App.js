import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const deleteItem = (id) => {
    setToDos(toDos.filter((element) => element.id !== id));
  }
  return (
    <div className="app">
      <div className="mainHeading" >
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Add a new Task</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => {
          setToDo(e.target.value)
        }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          setToDos([...toDos, { id: Date.now(), task: toDo, done: false }])
        }} className="fas fa-plus"></i>
      </div>
      <div className="subHeading">
        <br />
        <h2 style={{ color: 'white' }}>Pending Tasks</h2>
      </div>
      <div className="todos">
        {toDos.map((element) => {
          return (
            <div className="todo">
              <div className="left">
                <input value={element.done} onChange={(e) => {
                  setToDos(toDos.filter((object) => {
                    if (object.id === element.id) {
                      object.done = e.target.checked
                    }
                    return object
                  }))
                }} type="checkbox" name="" id="" />
                <p>{element.task}</p>
              </div>
              <div className="right">
                <i onClick={() => {
                  deleteItem(element.id)
                }} className="fas fa-times"></i>
              </div>
            </div>
          )
        })
        }
        <div className="subHeading">
          <br />
          <h3 style={{ color: 'white' }}>Finished Tasks</h3>
        </div>
        {
          toDos.map((object) => {
            if (object.done) {
              return (
                <h3 style={{ color: 'white', textDecoration: 'line-through  ' }}>{object.task}</h3>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import List from './List'
const Todo = ({ doList }) => {
  return (
    <div className="Todo-wrap wrap">
      <div className="header">
        <h2>
          <p>해야 할 일</p>
        </h2>
      </div>
      <div className="section">
        <ul>
          {doList.map((list) => (
            <List list={list} key={list.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo

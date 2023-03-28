import React from 'react'
import List from './List'
const Done = ({ DoneList }) => {
  return (
    <div className="Done-wrap wrap">
      <div className="header">
        <h2>
          <p>완료 된 일</p>
        </h2>
      </div>
      <div className="section">
        <ul>
          {DoneList.map((list) => (
            <List list={list} key={list.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Done

import React from 'react'
import List from './List'
const Doing = ({ DoingList }) => {
  return (
    <div className="Doing-wrap wrap">
      <div className="header">
        <h2>
          <p>진행 중</p>
        </h2>
      </div>
      <div className="section">
        <ul>
          {DoingList.map((list) => (
            <List list={list} key={list.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Doing

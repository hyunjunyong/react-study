import React from 'react'
import Delete from '../images/delete.png'

const List = ({ title, ToDoList, onRemove }) => {
  const imgStyle = {
    width: '10px',
    height: '10px',
  }

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id)
    // setDraggedItemId(id);
  }

  return (
    <div className="wrap">
      <div className="header">
        <h2>
          <p>{title}</p>
        </h2>
      </div>
      <div className="section">
        <ul>
          {ToDoList.map((list) => (
            <li
              draggable
              onDragStart={(e) => handleDragStart(e, list.id)}
              key={list.id}
            >
              {list.do}
              <button onClick={() => onRemove(list.id)}>
                <img src={Delete} alt="" style={imgStyle} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default List

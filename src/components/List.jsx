import React from 'react'
import Delete from '../images/delete.png'

const List = ({
  title,
  ToDoList,
  onRemove,
  handleDragStart,
  handleDrop,
  handleDragOver,
}) => {
  const imgStyle = {
    width: '10px',
    height: '10px',
  }

  return (
    <div className="wrap">
      <div className="header">
        <h2>
          <p>{title}</p>
        </h2>
      </div>
      <div
        className="section"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, ToDoList)}
      >
        <ul>
          {ToDoList.map((list, index) => (
            <li
              draggable
              onDragStart={(e) => handleDragStart(e, ToDoList, index)}
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

import React from 'react'
import Delete from '../images/delete.png'

const List = ({
  title,
  ToDoList,
  onRemove,
  handleDragStart,
  handleDrop,
  handleDragOver,
  bgColor,
}) => {
  const imgStyle = {
    width: '10px',
    height: '10px',
  }

  return (
    <div className="wrap w-1/3 h-96 p-2 m-2 rounded-lg border-2 ">
      <div className="header">
        <h2 className="text-xl">
          <p>{title}</p>
        </h2>
      </div>
      <div
        className="section h-full"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, ToDoList)}
      >
        <ul>
          {ToDoList.map((list, index) => (
            <li
              className={'p-2 m-2 border-l-8 bg-white ' + bgColor}
              draggable
              onDragStart={(e) => handleDragStart(e, ToDoList, index)}
              key={list.id}
            >
              {list.do}
              <button
                className="ml-1"
                onClick={() => onRemove(list.id, list.type)}
              >
                <img src={Delete} alt="" style={imgStyle} />
              </button>
            </li>
          ))}

          {/* <li className="p-2 m-2 border-dashed border-2">
            <button className="w-full text-xl">+</button>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default List

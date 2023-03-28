import React from 'react'
import Delete from '../images/delete.png'

const List = ({ list }) => {
  const imgStyle = {
    width: '10px',
    height: '10px',
  }

  return (
    <li>
      {list.do}
      <button>
        <img src={Delete} alt="" style={imgStyle} />
      </button>
    </li>
  )
}

export default List

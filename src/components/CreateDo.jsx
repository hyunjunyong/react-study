import React from 'react'

const CreateDo = ({ onChange, username, onCreate }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="추가할 일을 입력하세요"
        onChange={onChange}
        value={username}
      />
      <button onClick={onCreate}>등록하기</button>
    </div>
  )
}

export default CreateDo

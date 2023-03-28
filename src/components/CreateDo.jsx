import React from 'react'

const CreateDo = ({ onChange, Do, onCreate }) => {
  return (
    <>
      <input
        type="text"
        placeholder="추가할 일을 입력하세요"
        onChange={onChange}
        value={Do}
      />
      <button onClick={onCreate}>등록하기</button>
    </>
  )
}

export default CreateDo

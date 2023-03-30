import React from 'react'

const CreateDo = ({ onChange, Do, onCreate }) => {
  return (
    <>
      <input
        className="w-1/2 p-2 m-2 rounded-lg border-2"
        type="text"
        placeholder="추가할 일을 입력하세요"
        onChange={onChange}
        value={Do}
      />
      <button
        className="text-sm ml-3 p-2 rounded-full bg-blue-400"
        onClick={onCreate}
      >
        등록하기
      </button>
    </>
  )
}

export default CreateDo

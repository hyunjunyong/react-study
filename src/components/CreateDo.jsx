import React from 'react'

const CreateDo = ({ onChange, Do, onCreate }) => {
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onCreate()
  }
  return (
    <>
      <input
        className="w-1/2 p-2 m-2 rounded-lg border-2"
        type="text"
        placeholder="추가할 일을 입력하세요"
        onChange={onChange}
        value={Do}
        onKeyPress={onKeyPress}
      />
      <button
        className="text-sm ml-3 p-2 rounded-full bg-blue-400 text-white"
        onClick={onCreate}
      >
        등록하기
      </button>
    </>
  )
}

export default CreateDo

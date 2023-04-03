import React, { useState, useRef } from 'react'
import './App.css'
import List from './components/List'
import CreateDo from './components/CreateDo'

const App = () => {
  const title = ['해야 할 일', '진행 중', '완료']
  const bgColor = ['border-red-500', 'border-yellow-500', 'border-green-500']
  const [doList, setDoList] = useState([
    {
      id: 1,
      do: '리액트 학습하기 1',
      type: 'ToDo',
    },
    {
      id: 2,
      do: '리액트 학습하기 2',
      type: 'ToDo',
    },
    {
      id: 3,
      do: '리액트 학습하기 3',
      type: 'ToDo',
    },
  ])
  const [DoneList, setDoneList] = useState([
    {
      id: 4,
      do: '리액트 학습하기 4',
      type: 'Done',
    },
    {
      id: 5,
      do: '리액트 학습하기 5',
      type: 'Done',
    },
    {
      id: 6,
      do: '리액트 학습하기 6',
      type: 'Done',
    },
  ])
  const [DoingList, setDoingList] = useState([
    {
      id: 7,
      do: '리액트 학습하기 7',
      type: 'Doing',
    },
    {
      id: 8,
      do: '리액트 학습하기 8',
      type: 'Doing',
    },
    {
      id: 9,
      do: '리액트 학습하기 9',
      type: 'Doing',
    },
  ])
  const [inputs, setInputs] = useState('')

  const onChange = (e) => {
    setInputs(e.target.value)
  }
  const nextId = useRef(4)
  const onCreate = () => {
    const addDoList = {
      id: nextId.current,
      do: inputs,
      type: 'ToDo',
    }
    setDoList([...doList, addDoList])
    setInputs('')
    nextId.current += 1
  }
  const onRemove = (id, type) => {
    if (type === 'ToDo') setDoList(doList.filter((list) => list.id !== id))
    if (type === 'Done') setDoneList(DoneList.filter((list) => list.id !== id))
    if (type === 'Doing')
      setDoingList(DoingList.filter((list) => list.id !== id))
  }

  const handleDragStart = (e, list, index) => {
    const dragInfo = { list, index }
    e.dataTransfer.setData('text/plain', JSON.stringify(dragInfo))
    dragInfo.draggedList = list // draggedList 설정
  }

  const handleDrop = (e, list) => {
    e.preventDefault()

    const dropInfo = JSON.parse(e.dataTransfer.getData('text/plain'))
    // const { list: draggedList, index: draggedIndex } = dropInfo
    const draggedList = dropInfo.list
    const draggedIndex = dropInfo.index

    if (JSON.stringify(list) === JSON.stringify(draggedList)) return

    const newList = [...list]
    const draggedItem = draggedList[draggedIndex]

    newList.splice(draggedIndex, 0, draggedItem)

    // draggedList.splice(draggedIndex, 1)
    const updatedList = draggedList.slice()
    updatedList.splice(draggedIndex, 1)
    console.log(updatedList, newList)
    // 상태 업데이트
    // 아래 list === doList부분은 JSON.stringify가 없어도 잘비교됨
    // 근데.. 위에는 있어야됨 why...??
    if (JSON.stringify(draggedList) === JSON.stringify(doList))
      setDoList([...updatedList])
    if (JSON.stringify(draggedList) === JSON.stringify(DoingList))
      setDoingList([...updatedList])
    if (JSON.stringify(draggedList) === JSON.stringify(DoneList))
      setDoneList([...updatedList])

    if (list === doList) {
      newList.map((item) => (item.type = 'ToDo'))
      setDoList([...newList])
    }
    if (list === DoingList) {
      newList.map((item) => (item.type = 'Doing'))
      setDoingList([...newList])
    }
    if (list === DoneList) {
      newList.map((item) => (item.type = 'Done'))
      setDoneList([...newList])
    }
  }
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App text-center mt-10 min-h-full bg-gray-100">
      <header className="mb-5">
        <h1 className="text-4xl pt-2">Kanban Board</h1>
      </header>

      <section className="flex mb-5">
        <List
          title={title[0]}
          ToDoList={doList}
          onRemove={onRemove}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          bgColor={bgColor[0]}
        />
        <List
          title={title[1]}
          ToDoList={DoingList}
          onRemove={onRemove}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          bgColor={bgColor[1]}
        />
        <List
          title={title[2]}
          ToDoList={DoneList}
          onRemove={onRemove}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          bgColor={bgColor[2]}
        />
      </section>
      <footer className="m-2 p-2">
        <CreateDo Do={inputs || ''} onChange={onChange} onCreate={onCreate} />
      </footer>
    </div>
  )
}

export default App

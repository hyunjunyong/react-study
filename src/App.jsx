import React, { useState, useRef } from 'react'
import './App.css'
import List from './components/List'
import CreateDo from './components/CreateDo'

const App = () => {
  const title = ['ToDo', 'Doing', 'Done']
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
      type: 'Doing',
    },
    {
      id: 5,
      do: '리액트 학습하기 5',
      type: 'Doing',
    },
    {
      id: 6,
      do: '리액트 학습하기 6',
      type: 'Doing',
    },
  ])
  const [DoingList, setDoingList] = useState([
    {
      id: 7,
      do: '리액트 학습하기 7',
      type: 'Done',
    },
    {
      id: 8,
      do: '리액트 학습하기 8',
      type: 'Done',
    },
    {
      id: 9,
      do: '리액트 학습하기 9',
      type: 'Done',
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
    }
    setDoList([...doList, addDoList])
    setInputs('')
    nextId.current += 1
  }
  const onRemove = (id) => {
    setDoList(doList.filter((list) => list.id !== id))
    setDoneList(DoneList.filter((list) => list.id !== id))
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

    if (list === draggedList) return

    const newList = [...list]
    const draggedItem = draggedList[draggedIndex]

    newList.splice(draggedIndex, 0, draggedItem)
    console.log(draggedList)
    // draggedList.splice(draggedIndex, 1)
    const updatedList = draggedList.slice()
    updatedList.splice(draggedIndex, 1)
    console.log(draggedList, doList, list)
    // 상태 업데이트
    // 아래 list === doList부분은 JSON.stringify가 없어도 잘비교됨
    // 근데.. 위에는 있어야됨 why...??
    if (JSON.stringify(draggedList) === JSON.stringify(doList))
      setDoList([...updatedList])
    if (JSON.stringify(draggedList) === JSON.stringify(DoingList))
      setDoingList([...updatedList])
    if (JSON.stringify(draggedList) === JSON.stringify(DoneList))
      setDoneList([...updatedList])

    if (list === doList) setDoList([...newList])
    if (list === DoingList) setDoingList([...newList])
    if (list === DoneList) setDoneList([...newList])
  }
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <header>
        <h1>ToDo-List</h1>
      </header>

      <section className="flex">
        <List
          title={title[0]}
          ToDoList={doList}
          onRemove={onRemove}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
        />
        <List
          title={title[1]}
          ToDoList={DoingList}
          onRemove={onRemove}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
        />
        <List
          title={title[2]}
          ToDoList={DoneList}
          onRemove={onRemove}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
        />
      </section>
      <footer>
        <CreateDo Do={inputs || ''} onChange={onChange} onCreate={onCreate} />
      </footer>
    </div>
  )
}

export default App

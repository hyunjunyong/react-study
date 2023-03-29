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
    },
    {
      id: 2,
      do: '리액트 학습하기 2',
    },
    {
      id: 3,
      do: '리액트 학습하기 3',
    },
  ])
  const [DoneList, setDoneList] = useState([
    {
      id: 4,
      do: '리액트 학습하기 4',
    },
    {
      id: 5,
      do: '리액트 학습하기 5',
    },
    {
      id: 6,
      do: '리액트 학습하기 6',
    },
  ])
  const [DoingList, setDoingList] = useState([
    {
      id: 7,
      do: '리액트 학습하기 7',
    },
    {
      id: 8,
      do: '리액트 학습하기 8',
    },
    {
      id: 9,
      do: '리액트 학습하기 9',
    },
  ])
  const [inputs, setInputs] = useState('')

  const onChange = (e) => {
    setInputs(e.target.value)
  }
  const nextId = useRef(4)
  const onCreate = () => {
    console.log(inputs)
    const addDoList = {
      id: nextId.current,
      do: inputs,
    }
    console.log(addDoList)
    setDoList([...doList, addDoList])

    setInputs('')
    nextId.current += 1
  }
  const onRemove = (id) => {
    setDoList(doList.filter((list) => list.id !== id))
    setDoneList(DoneList.filter((list) => list.id !== id))
    setDoingList(DoingList.filter((list) => list.id !== id))
  }
  return (
    <div className="App">
      <header>
        <h1>ToDo-List</h1>
      </header>

      <section>
        <List title={title[0]} ToDoList={doList} onRemove={onRemove} />
        <List title={title[1]} ToDoList={DoingList} onRemove={onRemove} />
        <List title={title[0]} ToDoList={DoneList} onRemove={onRemove} />
      </section>
      <footer>
        <CreateDo Do={inputs || ''} onChange={onChange} onCreate={onCreate} />
      </footer>
    </div>
  )
}

export default App

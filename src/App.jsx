import React, { useState, useRef } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import Doing from './components/Doing'
import Done from './components/Done'
import CreateDo from './components/CreateDo'

const App = () => {
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
  const [DoingList, setDoingList] = useState([
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
  return (
    <div className="App">
      <header>
        <h1>ToDo-List</h1>
      </header>

      <section>
        <ToDo doList={doList}></ToDo>
        <Doing DoingList={DoingList}></Doing>
        <Done DoneList={DoneList}></Done>
      </section>
      <footer>
        <CreateDo Do={inputs || ''} onChange={onChange} onCreate={onCreate} />
      </footer>
    </div>
  )
}

export default App

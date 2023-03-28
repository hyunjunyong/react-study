import React from 'react'
import './App.css'
import ToDo from './components/ToDo'
import Doing from './components/Doing'
import Done from './components/Done'
import CreateDo from './components/CreateDo'

const App = () => {
  const doList = [
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
  ]
  const DoneList = [
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
  ]
  const DoingList = [
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
  ]
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
        <CreateDo />
      </footer>
    </div>
  )
}

export default App

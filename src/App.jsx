import React from 'react'
import './App.css'
import ToDo from './components/ToDo'
import Doing from './components/Doing'
import Done from './components/Done'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>ToDo-List</h1>
      </header>

      <section>
        <ToDo></ToDo>
        <Doing></Doing>
        <Done></Done>
      </section>
    </div>
  )
}

export default App

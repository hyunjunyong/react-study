import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'

const App = () => {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes> */}
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

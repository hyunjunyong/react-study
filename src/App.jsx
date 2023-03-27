import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profile from './Profile'
import HistorySample from './HistorySample'

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  )
}

export default App

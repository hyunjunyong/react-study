import React from 'react'
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from '../src/component/TodoTemplate'
import TodoHead from '../src/component/TodoHead'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate children={'hello'}>
        <TodoHead />
      </TodoTemplate>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteHandle from './router/RouteHandle'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteHandle />
      </BrowserRouter>
    </>
  )
}

export default App
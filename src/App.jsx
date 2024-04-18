import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// components
import Home from './pages/Home'
import PokemonPage from './pages/PokemonPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/pokemon/:PokeName',
    element: <PokemonPage/>,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
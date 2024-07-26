import { useState } from 'react'
import './reset/style.css'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Content from './components/Content'
import Cart from './components/Cart'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Content />} />
    <Route path='cart' element={<Cart />}/>
  </Route>
))


function App() {
  return (
    <div className='App'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App

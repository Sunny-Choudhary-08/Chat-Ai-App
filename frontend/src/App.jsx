import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';


const router = createBrowserRouter([
 {
   path:'/',
  element:<Homepage/>
 },
 {
   path:'/register',
  element:<SignUp/>
 },
 {
   path:'/login',
  element:<Login/>
 },
])

const App = () => {
  return (
    <div>
<RouterProvider router = {router}/>
    </div>
  )
}

export default App

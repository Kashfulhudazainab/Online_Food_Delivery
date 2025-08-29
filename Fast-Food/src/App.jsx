import React from 'react'
import Home from './pages/Home'
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className='text-red-500 text-3xl'>
     <Home/>
      <ToastContainer />
    </div>
  )
}

export default App

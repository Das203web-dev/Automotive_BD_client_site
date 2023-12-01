import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='bg-[black] text-[white]'>
        <Header></Header>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App

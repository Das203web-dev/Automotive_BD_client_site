import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='bg-[black] text-[white]'>
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App

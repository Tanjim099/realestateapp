import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeLayout from './components/HomeLayout'
import HomePage from './pages/HomePage'
import ProjectViewPage from './pages/ProjectViewPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/project' element={<ProjectViewPage />} />
    </Routes>
  )
}

export default App

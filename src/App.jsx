import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
// import Dots from './components/dots'
import Header from "./components/Header"
import Home from "./landing/Home"
import Skill from './skills/Skill'
import ProjectPage from './projects/ProjectPage'
import NotFound from './components/NotFound'
import AboutPage from './about/AboutPage'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/skills" element={ <Skill/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path='*' element={ <NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

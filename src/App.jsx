import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
// import Dots from './components/dots'
import Header from './components/header'
import Home from "./components/Home"
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

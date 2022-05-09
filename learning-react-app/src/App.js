import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'



function App() {
  const [mode, setMode] = useState({
    bg: 'light',
    text: 'dark'
  })

  const changeMode = () => {
    if (mode.bg === 'light') {
      setMode({
        bg: 'dark',
        text: 'light'
      })
    }
    else {
      setMode({
        bg: 'light',
        text: 'dark'
      })
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="MyNavbar" attr1="About" attr2="TextForm" var={90} fmode={changeMode} mode={mode} />
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/textform" element={<TextForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;

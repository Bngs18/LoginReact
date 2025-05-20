import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import { Page } from './pages/Page';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/page' element={<Page/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

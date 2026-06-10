
import './App.css'
import Registeration from './Pages/Registeration'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './Pages/SignIn';
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    
   <Route path='/'element={<Registeration/>}/>
   <Route path='/signin'element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

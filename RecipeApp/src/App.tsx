
import './App.css'
import Registeration from './Pages/Registeration'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './Pages/SignIn';
import UserDashboard from './Pages/UserDashboard';
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    
   <Route path='/'element={<Registeration/>}/>
   <Route path='/signin'element={<SignIn/>}/>
   <Route path='/home'element={<UserDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

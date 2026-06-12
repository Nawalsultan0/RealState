import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';
//import Header from './Pages/Header';
import About from './Pages/About';
import SignUp from './Pages/SignOut';
import Header from './Components/Header';

const App = () => {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
     <Route path='/sign-in' element={<SignIn/>} />
     <Route path='/sign-up' element={<SignUp/>} />
     <Route path='/profile' element={<Profile/>} />
     <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
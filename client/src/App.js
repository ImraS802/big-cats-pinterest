import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ProfilePage from './components/userprofile/ProfilePage'
import BigcatIndex from './components/bigcat/BigcatIndex'
import BigcatShow from './components/bigcat/BigcatShow'
import BigcatEdit from './components/bigcat/BigcatEdit'
import BigcatCreate from './components/bigcat/BigcatCreate'


const App = ( ) => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bigcat" element={<BigcatIndex />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/bigcat/new" element={<BigcatCreate />} />
        <Route path="/bigcat/:id/edit" element={<BigcatEdit />} />
        <Route path="/bigcat/:id" element={<BigcatShow />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App

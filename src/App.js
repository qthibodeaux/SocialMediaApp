import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login/Login'
import Welcome from './features/auth/Welcome'
import Register from './features/auth/Register/Register'
import RequireAuth from './features/auth/RequireAuth'
import Home from './features/Home/Home'
import Profile from './features/Profile/Profile'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        
        <Route element={<RequireAuth />}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='home' element={<Home />} />
          <Route path='profile' element={<Profile />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
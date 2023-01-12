import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import ProfileDetail from './pages/ProfileDetail'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreatePost />} />
                <Route path='/profile/:id' element={<ProfileDetail />} />
                <Route path='/login' element={<UserLogin />} />
                <Route path='/register' element={<UserRegister />} />
            </Routes>
        </>
    )
}

export default App
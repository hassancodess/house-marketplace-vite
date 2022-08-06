// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import ForgotPassword from './pages/ForgotPassword'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Offers from './pages/Offers'
import Category from './pages/Category'
// Private Route
import PrivateRoute from './components/PrivateRoute'
// React Toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Components
import Navbar from './components/Navbar'
// App.jsx
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/categories/:categoryName' element={<Category />} />
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App

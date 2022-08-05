import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const auth = false
  return <div>{auth ? <Outlet /> : <Navigate to='/' />}</div>
}

export default PrivateRoute

import { Routes, Route, Navigate } from 'react-router';
import { PermissionView } from '../views';

export const PermissionRoutes = () => {
  return (
    <Routes>
      {/* <Route path='user' element={<UserView />} /> */}
      <Route path='/' element={<PermissionView/>} />
      <Route path='/*' element={<Navigate to="/permiso/" />} />
    </Routes>
  )
}

import { Routes, Route, Navigate } from 'react-router';
import { WeaponView } from '../views/WeaponView';







export const WeaponRoutes = () => {
  


  return (
    <Routes>
      {/* <Route path='user' element={<UserView />} /> */}
      <Route path='/' element={<WeaponView/>} />
      <Route path='/*' element={<Navigate to="/weapon/" />} />
    </Routes>
  )
}

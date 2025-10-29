import { Routes, Route, Navigate } from 'react-router';
import { AmmunitionView } from '../views';

export const AmmunitionRoutes = () => {
  return (
    <Routes>
      {/* <Route path='user' element={<UserView />} /> */}
      <Route path='/' element={<AmmunitionView/>} />
      <Route path='/*' element={<Navigate to="/ammunition/" />} />
    </Routes>
  )
}

import { Routes, Route, Navigate } from 'react-router';
import { ConfiscationsView,CreateView,EditView } from '../views';

export const ConfiscationRoutes = () => {
  return (
    <Routes>
      {/* <Route path='user' element={<UserView />} /> */}
      <Route path='/' element={<ConfiscationsView/>} />
      <Route path='/create' element={<CreateView/>} />
      <Route path='/edit/:confiscationId' element={<EditView/>} />
      <Route path='/*' element={<Navigate to="/confiscation/" />} />
    </Routes>
  )
}

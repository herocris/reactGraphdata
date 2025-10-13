import { Routes, Route, Navigate } from 'react-router';
import { ConfiscationView } from '../views/ConfiscationView';
import { CreateEditView } from '../views/CreateEditView';







export const ConfiscationRoutes = () => {
  


  return (
    <Routes>
      {/* <Route path='user' element={<UserView />} /> */}
      <Route path='/' element={<ConfiscationView/>} />
      <Route path='/createEdit' element={<CreateEditView/>} />
      <Route path='/*' element={<Navigate to="/confiscation/" />} />
    </Routes>
  )
}

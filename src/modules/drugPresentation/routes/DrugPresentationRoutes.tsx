import { Routes, Route, Navigate } from 'react-router';
import { DrugPresentationView } from '../views/DrugPresentationView';








export const DrugPresentationRoutes = () => {
  


  return (
    <Routes>
      {/* <Route path='user' element={<UserView />} /> */}
      <Route path='/' element={<DrugPresentationView/>} />
      <Route path='/*' element={<Navigate to="/drugPresentation/" />} />
    </Routes>
  )
}

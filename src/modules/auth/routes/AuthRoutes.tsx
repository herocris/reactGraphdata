import { Routes, Route, Navigate } from 'react-router';
import { RegisterPage ,LoginPage} from '..';


export const AuthRoutes = () => {
  console.log('AuthRoutes');
  
  return (
    <Routes>
        {/* <Route path='login' element={<LoginPage/>} /> */}
        <Route path='login' element={<LoginPage/>} />
        <Route path='register' element={<RegisterPage/>} />
        <Route path='/*' element={<Navigate to="/auth/login"/>} />
    </Routes>
  )
}

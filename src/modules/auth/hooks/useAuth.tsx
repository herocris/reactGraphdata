import { RootState } from '../../../store';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { startCreatingUserWithEmailPassword, startLoginWithEmailPassword } from '../thunks';

type onLoginData = {
    email:string
    password:string
}
type onRegisterData = {
    name:string
    email:string
    password:string
    passwordConfirmation:string
}
export const useAuth = () => {
    const { errorMessage } = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    
    const onLogin = async (data:onLoginData)=>{
        dispatch(startLoginWithEmailPassword(data));
    }
    const onRegister = async (data:onRegisterData)=>{
        dispatch(startCreatingUserWithEmailPassword(data));
    }
    return {
        onLogin,
        onRegister,
        errorMessage
    }
}

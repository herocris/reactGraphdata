import { Dispatch } from '@reduxjs/toolkit';
import calendarApi from '../../../api/graphdataApi';
import { onChecking,onLogin,onLogout,clearErrorMessage } from '../slices';

export interface LoginUser {
    email: string,
    password: string,
}

export interface RegisterUser {
    name: string,
    email: string,
    password: string,
}
export interface AuthError {
    error: string,
}

export const checkingAuthentication = () => {
    return async( dispatch:Dispatch ) => {

        dispatch( onChecking() );
        
    }
}


// export const startGoogleSignIn = () => {
//     return async( dispatch ) => {

//         dispatch( checkingCredentials() );

//         const result = await singInWithGoogle();
//         if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

//         dispatch( login( result ))

//     }
// }


export const startCreatingUserWithEmailPassword = ({ name, email, password  }:RegisterUser) => {
    return async( dispatch:Dispatch ) => {

        dispatch( onChecking() );

        try {
            const {data} = await calendarApi.post('/register',{ name, email, password  });           
            dispatch( onLogin( data.user ));
        } catch (error:any) {
            console.log(error);
            const errorMessage = error?.error?.email ?? ''
            dispatch( onLogout(errorMessage) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 4000);
        }

    }

}


export const startLoginWithEmailPassword = ({ email, password }:LoginUser) => {
    return async( dispatch:Dispatch ) => {

        dispatch( onChecking() );

        try {
            const {data} = await calendarApi.post('/login',{ email, password });           
            dispatch( onLogin( {
                name:data.user.name,
                email:data.user.email,
                roles:data.roles,
                permissions:data.permissions,
            } ));
        } catch (error:any) {
            dispatch( onLogout(error.error) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 4000);
        }
    }
}

export const startLogout = () => {
    return async( dispatch:Dispatch ) => {
        
        await calendarApi.post('/logout',);
        dispatch( onLogout() );

    }
}

export const checkAuthToken = () => {
    return async( dispatch:Dispatch ) => { 
        //if ( !token ) return dispatch( onLogout() );
        try {
            const {data} = await calendarApi.post('/refresh');
            dispatch( onLogin( data.user ));
        } catch (error) {
            console.log(error);
            
            dispatch( onLogout() );
        }
    }
}

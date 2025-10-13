import { Dispatch } from '@reduxjs/toolkit';
import calendarApi from '../../../api/graphdataApi';
import { setRoles, onLoading, setPermissions } from '.';
import { Permission, Role } from '../../../shared/interfaces/sharedInterfaces';



// export const startSetActiveUser = () => {
//     return async( dispatch:Dispatch ) => {

//         dispatch( onSetActiveUser() );

//     }
// }

export const startLoadingRoles = () => {
    return async (dispatch: Dispatch) => {
        dispatch(onLoading(true));
        try {
            const { data: { data } } = await calendarApi.get('/role');
            const roles = data.map((role: Role) => role.nombre);
            dispatch(setRoles(roles));
            dispatch(onLoading(false));

        } catch (error) {
            // dispatch( onLogout('Registro incorrecto') );
            // setTimeout(() => {
            //     dispatch( clearErrorMessage() );
            // }, 2000);
            console.log('hubo un error');

        }
    }
}

export const startLoadingPermissions = () => {
    return async (dispatch: Dispatch) => {
        dispatch(onLoading(true));
        try {
            const { data: { data } } = await calendarApi.get('/permission');
            const permissions = data.map((permissions: Permission) => permissions.nombre);
            dispatch(setPermissions(permissions));
            dispatch(onLoading(false));

        } catch (error) {
            // dispatch( onLogout('Registro incorrecto') );
            // setTimeout(() => {
            //     dispatch( clearErrorMessage() );
            // }, 2000);
            console.log('hubo un error');

        }
    }
}

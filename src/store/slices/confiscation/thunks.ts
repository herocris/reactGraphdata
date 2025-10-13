import { Dispatch } from '@reduxjs/toolkit';
import calendarApi from '../../../api/graphdataApi';
import { setConfiscations, onSetActiveConfiscation, onAddNewConfiscation, onUpdateConfiscation, onDeleteConfiscation, onSetTableOptions, onLoading, onSetErrorMessage, clearActiveConfiscation } from '.';
import { Confiscation } from '../../../shared/interfaces/sharedInterfaces';


export const startLoadingConfiscations = (page: number, sortBy: string, orderType: string, per_page: number, search_by: string, valueSearch: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(onLoading(true));
        sortBy = sortBy === 'id' ? 'identificador' : sortBy;
        try {
            const { data: { data, ...optionsTable } } = await calendarApi.get(`/confiscation?page=${page}&sort_by=${sortBy}&type=${orderType}&per_page=${per_page}&${search_by}=${valueSearch}`);
            const confiscations = data.map((confiscation: Confiscation) => {
                const { identificador: id, ...resto } = confiscation;
                return { id, ...resto }
            })
            console.log(confiscations);
            dispatch(onSetTableOptions(optionsTable));
            dispatch(setConfiscations(confiscations));
        } catch (error) {
            return handleApiError(error, dispatch);
        } finally {
            dispatch(onLoading(false));
        }
    }
}
export const startLoadingConfiscation = (confiscation: Confiscation) => {
    return async (dispatch: Dispatch) => {
        dispatch(onLoading(true));
        dispatch(clearActiveConfiscation())
        try {
            const { data } = await calendarApi.post('/confiscation', confiscation);
            const { identificador: id, ...resto } = data;
            dispatch(onSetActiveConfiscation(data))
        }
        catch (error: any) {
            return handleApiError(error, dispatch);
        } finally {
            dispatch(onLoading(false));
        }
    }
}

export const startSaveConfiscation = (confiscation: Confiscation) => {
    return async (dispatch: Dispatch) => {
        dispatch(onLoading(true));
        dispatch(onSetActiveConfiscation(confiscation))
        try {
            const { data } = await calendarApi.post('/confiscation', confiscation, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { identificador: id, ...resto } = data;
            dispatch(onAddNewConfiscation({ id, ...resto }))
        }
        catch (error: any) {
            return handleApiError(error, dispatch);
        } finally {
            dispatch(onLoading(false));
        }
    }
}

export const startUpdateConfiscation = (confiscation: Confiscation) => {
    return async (dispatch: Dispatch) => {
        dispatch(onLoading(true));

        try {
            const { data } = await calendarApi.put(`/confiscation/${confiscation.id}`, confiscation);
            const { identificador: id, ...resto } = data;
            dispatch(onUpdateConfiscation({ id, ...resto }))
        } catch (error: any) {
            console.log(error);

            return handleApiError(error, dispatch);
        } finally {
            dispatch(onLoading(false));
        }
    }
}

export const startDeleteConfiscation = (confiscation: Confiscation) => {
    return async (dispatch: Dispatch) => {
        dispatch(onLoading(true));
        dispatch(onSetActiveConfiscation(confiscation))
        try {
            await calendarApi.delete(`/confiscation/${confiscation.id}`,);
            dispatch(onDeleteConfiscation())
        } catch (error) {
            return handleApiError(error, dispatch);
        } finally {
            dispatch(onLoading(false));
        }
    }
}

const handleApiError = (error: any, dispatch: Dispatch) => {
    if (error?.hasOwnProperty('error')) {
        dispatch(onSetErrorMessage(error.error));
    }
    return Promise.reject();
};


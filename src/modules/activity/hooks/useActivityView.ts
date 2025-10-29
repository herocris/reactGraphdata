
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from "../../../store";
import { startLoadingActivities } from '../thunks';

export const useActivityView = () => {
  const { tableOptions, loading, errorMessage, activities } = useAppSelector((state: RootState) => state.activity);
  const dispatch = useAppDispatch();


  const LoadingEntities = (
    page: number,
    sortBy: string,
    sortType: string,
    pageSize: number,
    filterField: string,
    filterValue: string
  ) => {
    dispatch(startLoadingActivities(page, sortBy, sortType, pageSize, filterField, filterValue))
  }

  const columnsTable = ['id', 'tipo_de_evento','descripcion','id_usuario','usuario','cambios','fecha']

  return {
    activities,
    tableOptions,
    loading,
    columnsTable,
    errorMessage,
    LoadingEntities,
  }
}

import { useState } from "react";
import { clearActiveConfiscation, onSetActiveConfiscation, startDeleteConfiscation, startLoadingConfiscations, startSaveConfiscation, startUpdateConfiscation } from "../../../store/slices/confiscation";
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from "../../../store";
import { Confiscation } from "../../../shared/interfaces/sharedInterfaces";
import { useNavigate } from "react-router";

export const useConfiscationView = () => {
  const navigate = useNavigate();
  const { activeConfiscation, confiscations, tableOptions, loading, errorMessage } = useAppSelector((state: RootState) => state.confiscation);
  const dispatch = useAppDispatch();

  const [modalTitle, setModalTitle] = useState('')
  const [open, setOpen] = useState(false);

  const newConfication = () => {
    dispatch(clearActiveConfiscation())
    navigate('/confiscation/createEdit')
    //setOpen(!open);
  }

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  const setIdConfiscation = (id: string) => {
    const confiscation = confiscations.find((row: Confiscation) => row.id === id);
    dispatch(onSetActiveConfiscation(confiscation as Confiscation))
  };

  const DeleteConfiscation = async () => {
    await dispatch(startDeleteConfiscation(activeConfiscation));
    setOpenDialog(!openDialog);
  }

  const onSaveOrUptdate = async (confiscation: Confiscation) => {
    console.log(confiscation);
    if (activeConfiscation.id === undefined) {
      await dispatch(startSaveConfiscation(confiscation)).then(() => {
        newConfication()
      })
    } else {
      await dispatch(startUpdateConfiscation({ ...confiscation, id: activeConfiscation.id })).then(() => {
        newConfication()
      })
    }
    dispatch(clearActiveConfiscation())
  }

  const titleFormModal = () => activeConfiscation.id === undefined ? setModalTitle('Crear municion') : setModalTitle('Editar municion')


  const LoadingEntities = (
    page: number,
    sortBy: string,
    sortType: string,
    pageSize: number,
    filterField: string,
    filterValue: string
  ) => {
    dispatch(startLoadingConfiscations(page, sortBy, sortType, pageSize, filterField, filterValue))
  }

  const onSubmitForm = (formState: any) => {
    if (activeConfiscation.id === undefined) {
      dispatch(startSaveConfiscation(formState))
    } else {
      console.log(activeConfiscation.id);
      dispatch(startUpdateConfiscation(formState))
    }
    dispatch(clearActiveConfiscation())
  }

  const columnsTable = [
    "id",
    "fecha",
    "observacion",
    "direccion",
    "departamento",
    "municipalidad",
    "latitud",
    "longitud"
  ]

  return {
    tableOptions,
    loading,
    open,
    openDialog,
    columnsTable,
    confiscations,
    activeConfiscation,
    modalTitle,
    errorMessage,
    newConfication,
    handleOpenDialog,
    setIdConfiscation,
    DeleteConfiscation,
    LoadingEntities,
    onSubmitForm,
    onSaveOrUptdate,
    titleFormModal,
  }
}

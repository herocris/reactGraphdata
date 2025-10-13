import { useState } from "react";
import { clearActiveAmmunition, onSetActiveAmmunition, startDeleteAmmunition, startLoadingAmmunitions, startSaveAmmunition, startUpdateAmmunition } from "../../../store/slices/ammunition";
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from "../../../store";
import { Ammunition } from "../../../shared/interfaces/sharedInterfaces";

export const useAmmunitionView = () => {
  const { activeAmmunition, ammunitions, tableOptions, loading, errorMessage } = useAppSelector((state: RootState) => state.ammunition);
  const dispatch = useAppDispatch();

  const [modalTitle, setModalTitle] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open !== false) dispatch(clearActiveAmmunition())
    setOpen(!open);
  }

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  const setIdAmmunition = (id: string) => {
    const ammunition = ammunitions.find((row: Ammunition) => row.id === id);
    dispatch(onSetActiveAmmunition(ammunition as Ammunition))
  };

  const DeleteAmmunition = async () => {
    await dispatch(startDeleteAmmunition(activeAmmunition));
    setOpenDialog(!openDialog);
  }

  const onSaveOrUptdate = async (ammunition: Ammunition) => {
    console.log(ammunition);
    if (activeAmmunition.id === undefined) {
      await dispatch(startSaveAmmunition(ammunition)).then(() => {
        handleOpen()
      })
    } else {
      await dispatch(startUpdateAmmunition({ ...ammunition, id: activeAmmunition.id })).then(() => {
        handleOpen()
      })
    }
     dispatch(clearActiveAmmunition())
  }

  const titleFormModal = () => activeAmmunition.id === undefined ? setModalTitle('Crear municion') : setModalTitle('Editar municion')


  const LoadingEntities = (
    page: number,
    sortBy: string,
    sortType: string,
    pageSize: number,
    filterField: string,
    filterValue: string
  ) => {
    dispatch(startLoadingAmmunitions(page, sortBy, sortType, pageSize, filterField, filterValue))
  }

  const onSubmitForm = (formState: any) => {
    if (activeAmmunition.id === undefined) {
      dispatch(startSaveAmmunition(formState))
    } else {
      console.log(activeAmmunition.id);
      dispatch(startUpdateAmmunition(formState))
    }
    dispatch(clearActiveAmmunition())
  }

  const columnsTable = ['id', 'descripcion', 'logo']

  return {
    tableOptions,
    loading,
    open,
    openDialog,
    columnsTable,
    ammunitions,
    activeAmmunition,
    modalTitle,
    errorMessage,
    handleOpen,
    handleOpenDialog,
    setIdAmmunition,
    DeleteAmmunition,
    LoadingEntities,
    onSubmitForm,
    onSaveOrUptdate,
    titleFormModal,
  }
}

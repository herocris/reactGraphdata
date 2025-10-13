import { useState } from "react";
import { clearActiveDrugPresentation, onSetActiveDrugPresentation, startDeleteDrugPresentation, startLoadingDrugPresentations, startSaveDrugPresentation, startUpdateDrugPresentation } from "../../../store/slices/drugPresentation";
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from "../../../store";
import { DrugPresentation } from "../../../shared/interfaces/sharedInterfaces";

export const useDrugPresentationView = () => {
  const { activeDrugPresentation, drugPresentations, tableOptions, loading, errorMessage } = useAppSelector((state: RootState) => state.drugPresentation);
  const dispatch = useAppDispatch();

  const [modalTitle, setModalTitle] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open !== false) dispatch(clearActiveDrugPresentation())
    setOpen(!open);
  }

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  const setIdDrugPresentation = (id: string) => {
    const drugPresentation = drugPresentations.find((row: DrugPresentation) => row.id === id);
    dispatch(onSetActiveDrugPresentation(drugPresentation as DrugPresentation))
  };

  const DeleteDrugPresentation = async () => {
    await dispatch(startDeleteDrugPresentation(activeDrugPresentation));
    setOpenDialog(!openDialog);
  }

  const onSaveOrUptdate = async (drugPresentation: DrugPresentation) => {
    console.log(drugPresentation);
    if (activeDrugPresentation.id === undefined) {
      await dispatch(startSaveDrugPresentation(drugPresentation)).then(() => {
        handleOpen()
      })
    } else {
      await dispatch(startUpdateDrugPresentation({ ...drugPresentation, id: activeDrugPresentation.id })).then(() => {
        handleOpen()
      })
    }
     dispatch(clearActiveDrugPresentation())
  }

  const titleFormModal = () => activeDrugPresentation.id === undefined ? setModalTitle('Crear municion') : setModalTitle('Editar municion')


  const LoadingEntities = (
    page: number,
    sortBy: string,
    sortType: string,
    pageSize: number,
    filterField: string,
    filterValue: string
  ) => {
    dispatch(startLoadingDrugPresentations(page, sortBy, sortType, pageSize, filterField, filterValue))
  }

  const onSubmitForm = (formState: any) => {
    if (activeDrugPresentation.id === undefined) {
      dispatch(startSaveDrugPresentation(formState))
    } else {
      console.log(activeDrugPresentation.id);
      dispatch(startUpdateDrugPresentation(formState))
    }
    dispatch(clearActiveDrugPresentation())
  }

  const columnsTable = ['id', 'descripcion', 'logo']

  return {
    tableOptions,
    loading,
    open,
    openDialog,
    columnsTable,
    drugPresentations,
    activeDrugPresentation,
    modalTitle,
    errorMessage,
    handleOpen,
    handleOpenDialog,
    setIdDrugPresentation,
    DeleteDrugPresentation,
    LoadingEntities,
    onSubmitForm,
    onSaveOrUptdate,
    titleFormModal,
  }
}

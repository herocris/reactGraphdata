import { useState } from "react";
import { startDeleteDrug, startLoadingDrugs, startSaveDrug, startUpdateDrug } from "../thunks";
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from "../../../store";
import { Drug } from "../../../shared/interfaces/sharedInterfaces";
import { clearActiveDrug, onSetActiveDrug } from "../slices";

export const useDrugView = () => {
  const { activeDrug, drugs, tableOptions, loading, errorMessage } = useAppSelector((state: RootState) => state.drug);
  const dispatch = useAppDispatch();

  const [modalTitle, setModalTitle] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open !== false) dispatch(clearActiveDrug())
    setOpen(!open);
  }

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  const setIdDrug = (id: string) => {
    const drug = drugs.find((row: Drug) => row.id === id);
    dispatch(onSetActiveDrug(drug as Drug))
  };

  const DeleteDrug = async () => {
    await dispatch(startDeleteDrug(activeDrug));
    setOpenDialog(!openDialog);
  }

  const onSaveOrUptdate = async (drug: Drug) => {
    console.log(drug);
    if (activeDrug.id === undefined) {
      await dispatch(startSaveDrug(drug)).then(() => {
        handleOpen()
      })
    } else {
      await dispatch(startUpdateDrug({ ...drug, id: activeDrug.id })).then(() => {
        handleOpen()
      })
    }
    dispatch(clearActiveDrug())
  }

  const titleFormModal = () => activeDrug.id === undefined ? setModalTitle('Crear municion') : setModalTitle('Editar municion')


  const LoadingEntities = (
    page: number,
    sortBy: string,
    sortType: string,
    pageSize: number,
    filterField: string,
    filterValue: string
  ) => {
    dispatch(startLoadingDrugs(page, sortBy, sortType, pageSize, filterField, filterValue))
  }

  const onSubmitForm = (formState: any) => {
    if (activeDrug.id === undefined) {
      dispatch(startSaveDrug(formState))
    } else {
      console.log(activeDrug.id);
      dispatch(startUpdateDrug(formState))
    }
    dispatch(clearActiveDrug())
  }

  const columnsTable = ['id', 'descripcion', 'logo']

  return {
    tableOptions,
    loading,
    open,
    openDialog,
    columnsTable,
    drugs,
    activeDrug,
    modalTitle,
    errorMessage,
    handleOpen,
    handleOpenDialog,
    setIdDrug,
    DeleteDrug,
    LoadingEntities,
    onSubmitForm,
    onSaveOrUptdate,
    titleFormModal,
  }
}

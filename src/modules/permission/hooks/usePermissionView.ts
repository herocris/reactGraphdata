import { useState } from "react";
import { clearActivePermission, onSetActivePermission } from "../slices";
import {startDeletePermission, startLoadingPermissions, startSavePermission, startUpdatePermission } from "../thunks";
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from "../../../store";
import { Permission } from "../../../shared/interfaces/sharedInterfaces";

export const usePermissionView = () => {
  const { activePermission, permissions, tableOptions, loading, errorMessage } = useAppSelector((state: RootState) => state.permission);
  const dispatch = useAppDispatch();

  const [modalTitle, setModalTitle] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open !== false) dispatch(clearActivePermission())
    setOpen(!open);
  }

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  const setIdPermission = (id: string) => {
    const permission = permissions.find((row: Permission) => row.id === id);
    dispatch(onSetActivePermission(permission as Permission))
  };

  const DeletePermission = async () => {
    await dispatch(startDeletePermission(activePermission));
    setOpenDialog(!openDialog);
  }

  const onSaveOrUptdate = async (rol: Permission) => {
    console.log(rol);
    if (activePermission.id === undefined) {
      await dispatch(startSavePermission(rol)).then(() => {
        handleOpen()
      })
    } else {
      await dispatch(startUpdatePermission({ ...rol, id: activePermission.id })).then(() => {
        handleOpen()
      })
    }
     dispatch(clearActivePermission())
  }

  const titleFormModal = () => activePermission.id === undefined ? setModalTitle('Crear permiso') : setModalTitle('Editar permiso')


  const LoadingEntities = (
    page: number,
    sortBy: string,
    sortType: string,
    pageSize: number,
    filterField: string,
    filterValue: string
  ) => {
    dispatch(startLoadingPermissions(page, sortBy, sortType, pageSize, filterField, filterValue))
  }

  const onSubmitForm = (formState: any) => {
    if (activePermission.id === undefined) {
      dispatch(startSavePermission(formState))
    } else {
      console.log(activePermission.id);
      dispatch(startUpdatePermission(formState))
    }
    dispatch(clearActivePermission())
  }

  const columnsTable = ['id', 'nombre']

  return {
    tableOptions,
    loading,
    open,
    openDialog,
    columnsTable,
    permissions,
    activePermission,
    modalTitle,
    errorMessage,
    handleOpen,
    handleOpenDialog,
    setIdPermission,
    DeletePermission,
    LoadingEntities,
    onSubmitForm,
    onSaveOrUptdate,
    titleFormModal,
  }
}

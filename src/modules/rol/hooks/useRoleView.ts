import { useEffect, useState } from "react";
import { clearActiveRole, onSetActiveRole, startDeleteRol, startLoadingRoles, startSaveRol, startUpdateRol } from "../../../store/slices/rol";
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { startLoadingPermissions } from "../../../store/slices/resouce";
import { RootState } from "../../../store";
import { Role } from "../../../shared/interfaces/sharedInterfaces";

export const useRoleView = () => {
  const { activeRole, roles, tableOptions, loading, errorMessage } = useAppSelector((state: RootState) => state.role);
  const { permisos } = useAppSelector((state: RootState) => state.resource);
  const dispatch = useAppDispatch();

  const [modalTitle, setModalTitle] = useState('')
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open !== false) dispatch(clearActiveRole())
    setOpen(!open);
  }

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  const setIdRole = (id: string) => {
    const role = roles.find((row: Role) => row.id === id);
    dispatch(onSetActiveRole(role as Role))
  };

  const DeleteRole = async () => {
    await dispatch(startDeleteRol(activeRole));
    setOpenDialog(!openDialog);
  }

  const onSaveOrUptdate = async (role: Role) => {
    console.log(role);
    if (activeRole.id === undefined) {
      await dispatch(startSaveRol(role)).then(() => {
        handleOpen()
      })
    } else {
      await dispatch(startUpdateRol({ ...role, id: activeRole.id })).then(() => {
        handleOpen()
      })
    }
     dispatch(clearActiveRole())
  }

  const titleFormModal = () => activeRole.id === undefined ? setModalTitle('Crear rol') : setModalTitle('Editar rol')

  useEffect(() => {
    dispatch(startLoadingPermissions());
  }, [])

  const LoadingEntities = (
    page: number,
    sortBy: string,
    sortType: string,
    pageSize: number,
    filterField: string,
    filterValue: string
  ) => {
    dispatch(startLoadingRoles(page, sortBy, sortType, pageSize, filterField, filterValue))
  }

  const onSubmitForm = (formState: any) => {
    if (activeRole.id === undefined) {
      dispatch(startSaveRol(formState))
    } else {
      console.log(activeRole.id);
      dispatch(startUpdateRol(formState))
    }
    dispatch(clearActiveRole())
  }

  const columnsTable = ['id', 'nombre']

  return {
    roles,
    tableOptions,
    loading,
    open,
    openDialog,
    columnsTable,
    permisos,
    activeRole,
    titulo: modalTitle,
    errorMessage,
    handleOpen,
    handleOpenDialog,
    setIdRole,
    DeleteRole,
    LoadingEntities,
    onSubmitForm,
    onSaveOrUptdate,
    titleFormModal,
  }
}

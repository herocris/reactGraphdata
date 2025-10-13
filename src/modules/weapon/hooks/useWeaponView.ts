import { useState } from "react";
import { clearActiveWeapon, onSetActiveWeapon, startDeleteWeapon, startLoadingWeapons, startSaveWeapon, startUpdateWeapon } from "../../../store/slices/weapon";
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from "../../../store";
import { Weapon } from "../../../shared/interfaces/sharedInterfaces";

export const useWeaponView = () => {
  const { activeWeapon, weapons, tableOptions, loading, errorMessage } = useAppSelector((state: RootState) => state.weapon);
  const dispatch = useAppDispatch();

  const [modalTitle, setModalTitle] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open !== false) dispatch(clearActiveWeapon())
    setOpen(!open);
  }

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  const setIdWeapon = (id: string) => {
    const weapon = weapons.find((row: Weapon) => row.id === id);
    dispatch(onSetActiveWeapon(weapon as Weapon))
  };

  const DeleteWeapon = async () => {
    await dispatch(startDeleteWeapon(activeWeapon));
    setOpenDialog(!openDialog);
  }

  const onSaveOrUptdate = async (weapon: Weapon) => {
    console.log(weapon);
    if (activeWeapon.id === undefined) {
      await dispatch(startSaveWeapon(weapon)).then(() => {
        handleOpen()
      })
    } else {
      await dispatch(startUpdateWeapon({ ...weapon, id: activeWeapon.id })).then(() => {
        handleOpen()
      })
    }
     dispatch(clearActiveWeapon())
  }

  const titleFormModal = () => activeWeapon.id === undefined ? setModalTitle('Crear municion') : setModalTitle('Editar municion')


  const LoadingEntities = (
    page: number,
    sortBy: string,
    sortType: string,
    pageSize: number,
    filterField: string,
    filterValue: string
  ) => {
    dispatch(startLoadingWeapons(page, sortBy, sortType, pageSize, filterField, filterValue))
  }

  const onSubmitForm = (formState: any) => {
    if (activeWeapon.id === undefined) {
      dispatch(startSaveWeapon(formState))
    } else {
      console.log(activeWeapon.id);
      dispatch(startUpdateWeapon(formState))
    }
    dispatch(clearActiveWeapon())
  }

  const columnsTable = ['id', 'descripcion', 'logo']

  return {
    tableOptions,
    loading,
    open,
    openDialog,
    columnsTable,
    weapons,
    activeWeapon,
    modalTitle,
    errorMessage,
    handleOpen,
    handleOpenDialog,
    setIdWeapon,
    DeleteWeapon,
    LoadingEntities,
    onSubmitForm,
    onSaveOrUptdate,
    titleFormModal,
  }
}

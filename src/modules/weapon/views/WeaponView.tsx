


import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout2 } from '../../../shared/layout/GraphLayout2';

import { WeaponFormModal } from '../components/WeaponFormModal';
import { useWeaponView } from '../hooks/useWeaponView';

export const WeaponView = () => {
  const {
    DeleteWeapon,
    LoadingEntities,
    columnsTable,
    handleOpen,
    handleOpenDialog,
    loading,
    setIdWeapon,
    tableOptions,
    openDialog,
    open,
    weapons,
    activeWeapon,
    onSaveOrUptdate,
    modalTitle,
    titleFormModal,
    errorMessage

  } = useWeaponView()
  return (
    <>
      <GrapLayout2>
        <EntityList
          handleOpen={handleOpen}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdWeapon}
          EntityCollection={weapons}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} />
        <WeaponFormModal
          open={open}
          handleOpen={handleOpen}
          loading={loading}
          activeWeapon={activeWeapon}
          onSaveOrUptdate={onSaveOrUptdate}
          modalTitle={modalTitle}
          titleFormModal={titleFormModal}
          errorMessage={errorMessage} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar la munición?"
          openDialog={openDialog}
          DeleteEntity={DeleteWeapon}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={handleOpen} />
      </GrapLayout2>
    </>
  )
}




import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout2 } from '../../../shared/layout/GraphLayout2';

import { AmmunitionFormModal } from '../components/AmmunitionFormModal';
import { useAmmunitionView } from '../hooks/useAmmunitionView';

export const AmmunitionView = () => {
  const {
    DeleteAmmunition,
    LoadingEntities,
    columnsTable,
    handleOpen,
    handleOpenDialog,
    loading,
    setIdAmmunition,
    tableOptions,
    openDialog,
    open,
    ammunitions,
    activeAmmunition,
    onSaveOrUptdate,
    modalTitle,
    titleFormModal,
    errorMessage

  } = useAmmunitionView()
  return (
    <>
      <GrapLayout2>
        <EntityList
          handleOpen={handleOpen}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdAmmunition}
          EntityCollection={ammunitions}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} />
        <AmmunitionFormModal
          open={open}
          handleOpen={handleOpen}
          loading={loading}
          activeAmmunition={activeAmmunition}
          onSaveOrUptdate={onSaveOrUptdate}
          modalTitle={modalTitle}
          titleFormModal={titleFormModal}
          errorMessage={errorMessage} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar la munición?"
          openDialog={openDialog}
          DeleteEntity={DeleteAmmunition}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={handleOpen} />
      </GrapLayout2>
    </>
  )
}

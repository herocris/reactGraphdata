


import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout } from '../../../shared/layout/GraphLayout';

import { DrugPresentationFormModal } from '../components';
import { useDrugPresentationView } from '../hooks';

export const DrugPresentationView = () => {
  const {
    DeleteDrugPresentation,
    LoadingEntities,
    columnsTable,
    handleOpen,
    handleOpenDialog,
    loading,
    setIdDrugPresentation,
    tableOptions,
    openDialog,
    open,
    drugPresentations,
    activeDrugPresentation,
    onSaveOrUptdate,
    modalTitle,
    titleFormModal,
    errorMessage

  } = useDrugPresentationView()
  return (
    <>
      <GrapLayout>
        <EntityList
          handleOpen={handleOpen}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdDrugPresentation}
          EntityCollection={drugPresentations}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} />
        <DrugPresentationFormModal
          open={open}
          handleOpen={handleOpen}
          loading={loading}
          activeDrugPresentation={activeDrugPresentation}
          onSaveOrUptdate={onSaveOrUptdate}
          modalTitle={modalTitle}
          titleFormModal={titleFormModal}
          errorMessage={errorMessage} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar la munición?"
          openDialog={openDialog}
          DeleteEntity={DeleteDrugPresentation}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={handleOpen} />
      </GrapLayout>
    </>
  )
}

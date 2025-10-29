


import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout } from '../../../shared/layout/GraphLayout';
import { DrugFormModal } from '../components';
import { useDrugView } from '../hooks';

export const DrugView = () => {
  const {
    DeleteDrug,
    LoadingEntities,
    columnsTable,
    handleOpen,
    handleOpenDialog,
    loading,
    setIdDrug,
    tableOptions,
    openDialog,
    open,
    drugs,
    activeDrug,
    onSaveOrUptdate,
    modalTitle,
    titleFormModal,
    errorMessage

  } = useDrugView()
  return (
    <>
      <GrapLayout>
        <EntityList
          handleOpen={handleOpen}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdDrug}
          EntityCollection={drugs}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} />
        <DrugFormModal
          open={open}
          handleOpen={handleOpen}
          loading={loading}
          activeDrug={activeDrug}
          onSaveOrUptdate={onSaveOrUptdate}
          modalTitle={modalTitle}
          titleFormModal={titleFormModal}
          errorMessage={errorMessage} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar la munición?"
          openDialog={openDialog}
          DeleteEntity={DeleteDrug}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={handleOpen} />
      </GrapLayout>
    </>
  )
}

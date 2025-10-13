


import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout2 } from '../../../shared/layout/GraphLayout2';
import { useConfiscationView } from '../hooks/useConfiscationView';

export const ConfiscationView = () => {
  const {
    DeleteConfiscation,
    LoadingEntities,
    columnsTable,
    newConfication,
    handleOpenDialog,
    loading,
    setIdConfiscation,
    tableOptions,
    openDialog,
    confiscations
  } = useConfiscationView()
  return (
    <>
      <GrapLayout2>
        <EntityList
          handleOpen={()=>{}}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdConfiscation}
          EntityCollection={confiscations}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar la munición?"
          openDialog={openDialog}
          DeleteEntity={DeleteConfiscation}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={newConfication} />
      </GrapLayout2>
    </>
  )
}

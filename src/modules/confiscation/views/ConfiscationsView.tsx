import { useMediaQuery } from '@mui/material';
import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout } from '../../../shared/layout/GraphLayout';
import { useConfiscationView } from '../hooks';


export const ConfiscationsView = () => {
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

  const matches = useMediaQuery('(min-width:600px)');//uso de MediaQuery para responsividad

  return (
    <>
      <GrapLayout>
        <EntityList
          handleOpen={()=>{}}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdConfiscation}
          EntityCollection={confiscations}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={matches?columnsTable:[columnsTable[1],columnsTable[2]]} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar el decomiso?"
          openDialog={openDialog}
          DeleteEntity={DeleteConfiscation}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={newConfication} />
      </GrapLayout>
    </>
  )
}

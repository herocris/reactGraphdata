import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout } from '../../../shared/layout/GraphLayout';
import { PermissionFormModal } from '../components';
import { usePermissionView } from '../hooks';

export const PermissionView = () => {
  const {
    DeletePermission,
    LoadingEntities,
    columnsTable,
    handleOpen,
    handleOpenDialog,
    loading,
    setIdPermission,
    tableOptions,
    openDialog,
    open,
    permissions,
    activePermission,
    onSaveOrUptdate,
    modalTitle,
    titleFormModal,
    errorMessage

  } = usePermissionView()
  return (
    <>
      <GrapLayout>
        <EntityList
          handleOpen={handleOpen}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdPermission}
          EntityCollection={permissions}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} />
        <PermissionFormModal
          open={open}
          handleOpen={handleOpen}
          loading={loading}
          activePermission={activePermission}
          onSaveOrUptdate={onSaveOrUptdate}
          modalTitle={modalTitle}
          titleFormModal={titleFormModal}
          errorMessage={errorMessage} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar el rol?"
          openDialog={openDialog}
          DeleteEntity={DeletePermission}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={handleOpen} />
      </GrapLayout>
    </>
  )
}

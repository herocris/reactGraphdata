


import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout2 } from '../../../shared/layout/GraphLayout2';

import { RoleFormModal } from '../components/RoleFormModal';
import { useRoleView } from '../hooks/useRoleView';

export const RoleView = () => {
  const {
    DeleteRole,
    LoadingEntities,
    columnsTable,
    handleOpen,
    handleOpenDialog,
    loading,
    setIdRole,
    tableOptions,
    openDialog,
    open,
    permisos,
    roles,
    activeRole,
    onSaveOrUptdate,
    titulo,
    titleFormModal,
    errorMessage

  } = useRoleView()
  return (
    <>
      <GrapLayout2>
        <EntityList
          handleOpen={handleOpen}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdRole}
          EntityCollection={roles}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} />
        <RoleFormModal
          open={open}
          handleOpen={handleOpen}
          permisos={permisos}
          loading={loading}
          activeRole={activeRole}
          onSaveOrUptdate={onSaveOrUptdate}
          modalTitle={titulo}
          titleFormModal={titleFormModal}
          errorMessage={errorMessage} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar el rol?"
          openDialog={openDialog}
          DeleteEntity={DeleteRole}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={handleOpen} />
      </GrapLayout2>
    </>
  )
}

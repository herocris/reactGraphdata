

import { useUserView } from "../hooks/useUserView";
import { UserFormModal } from "../components/UserFormModal";
import { AddFloatingButton, AlertDialog, EntityList, } from '../../../components';
import { GrapLayout } from "../../../shared/layout/GraphLayout";

export const UserView = () => {
  
  const {
    DeleteUser,
    LoadingEntities,
    columnsTable,
    handleOpen,
    handleOpenDialog,
    loading,
    setIdUser,
    tableOptions,
    users,
    openDialog,
    open,
    permisos,
    roles,
    activeUser,
    onSaveOrUptdate,
    titulo,
    titleFormModal,
    errorMessage
  } = useUserView()
  return (
    <>
      <GrapLayout>
        <EntityList
          handleOpen={handleOpen}
          handleOpenDialog={handleOpenDialog}
          LoadingEntities={LoadingEntities}
          setIdEntity={setIdUser}
          EntityCollection={users}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} />
        <UserFormModal
          open={open}
          handleOpen={handleOpen}
          permisos={permisos}
          roles={roles}
          loading={loading}
          activeUser={activeUser}
          onSaveOrUptdate={onSaveOrUptdate}
          titulo={titulo}
          titleFormModal={titleFormModal}
          errorMessage={errorMessage} />
        <AlertDialog
          title='Borrar'
          dialogMessage="Deseas borrar el usuario?"
          openDialog={openDialog}
          DeleteEntity={DeleteUser}
          handleOpen={handleOpenDialog} />
        <AddFloatingButton handleOpen={handleOpen} />
      </GrapLayout>
    </>
  )
}

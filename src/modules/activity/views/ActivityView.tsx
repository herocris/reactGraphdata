import { EntityList, } from '../../../components';
import { GrapLayout2 } from '../../../shared/layout/GraphLayout2';

import { useActivityView } from '../hooks/useActivityView';

export const ActivityView = () => {
  const {
    activities,
    LoadingEntities,
    columnsTable,
    loading,
    tableOptions,
    errorMessage
  } = useActivityView()
  return (
    <>
      <GrapLayout2>
        <EntityList
          handleOpen={()=>{}}
          handleOpenDialog={()=>{}}
          LoadingEntities={LoadingEntities}
          setIdEntity={()=>{}}
          EntityCollection={activities}
          tableOptions={tableOptions}
          loading={loading}
          columnsTable={columnsTable} 
          editable={false}
          />
      </GrapLayout2>
    </>
  )
}

import { ConfiscationForm } from '../components/ConfiscationForm'
import { Confiscation } from '../../../shared/interfaces/sharedInterfaces'
import { GrapLayout2 } from '../../../shared/layout/GraphLayout2'
const confiscation: Confiscation = {
  fecha: '',
  observacion: '',
  direccion: '',
  departamento: '',
  municipalidad: '',
  latitud: 0,
  longitud: 0,
}
export const CreateEditView = () => {
  return (
    <GrapLayout2>
      <ConfiscationForm
        activeConfiscation={confiscation}
        errorMessage={''}
        handleOpen={() => { }}
        loading={false}
        modalTitle=''
        onSaveOrUptdate={() => { }}
        open={true}
        titleFormModal={() => { }}
      />
    </GrapLayout2>
  )
}

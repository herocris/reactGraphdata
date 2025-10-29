import { useWeaponConfiscation } from '../hooks';
import { Box } from '@mui/material';
import { WeaponConfiscationForm } from './';
import { ListSubConfiscation } from '../../confiscation/components';
import { AlertDialog } from '../../../components';

export const CrudWeaponConfiscation = () => {
    const {
        weaponConfiscations,
        activeWeaponConfiscation,
        openWeaponConfiscationForm,
        weaponCollection,
        openDialogWeaponConfiscation,
        onDeleteWeaponConfiscation,
        onSaveOrUptdateWeaponConfiscation,
        setIdWeaponConfiscation,
        handleOpenWeaponConfiscationForm,
        handleOpenDialogWeaponConfiscation,
    } = useWeaponConfiscation();
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {openWeaponConfiscationForm
                ?
                <div>
                    <WeaponConfiscationForm
                        activeWeaponConfiscation={activeWeaponConfiscation}
                        weaponCollection={weaponCollection}
                        onSaveOrUptdate={onSaveOrUptdateWeaponConfiscation}
                        handleOpen={handleOpenWeaponConfiscationForm}
                        handleOpenDialog={handleOpenDialogWeaponConfiscation}
                    />
                    <AlertDialog
                        title='Borrar'
                        dialogMessage="Deseas borrar el decomiso?"
                        openDialog={openDialogWeaponConfiscation}
                        DeleteEntity={onDeleteWeaponConfiscation}
                        handleOpen={handleOpenDialogWeaponConfiscation} />
                </div>
                :
                <ListSubConfiscation
                    setOpen={handleOpenWeaponConfiscationForm}
                    list={weaponConfiscations}
                    setActiveSubConfiscation={setIdWeaponConfiscation}
                />
            }
        </Box>
    )
}

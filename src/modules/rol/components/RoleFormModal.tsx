import { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, TextField, Typography, Zoom, Modal, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { RoleFormModalProps, Role } from '../../../shared/interfaces/sharedInterfaces';
import { MultipleSelectButton } from '../../../components';
import { roleSchema } from '../validators';
import { boxStyleFormModal } from '../../../helpers/boxStyle';


type FormFields = z.infer<typeof roleSchema>;
export const RoleFormModal = ({ open, handleOpen, permisos, loading, onSaveOrUptdate, modalTitle, titleFormModal, activeRole, errorMessage }: RoleFormModalProps) => {
    const { register, handleSubmit, setError, formState: { errors, }, control, reset } = useForm<FormFields>({
        defaultValues: activeRole, resolver: zodResolver(roleSchema)
    });

    const onSubmit: SubmitHandler<Role> = async (data) => {
        await onSaveOrUptdate(data)
    };

    useEffect(() => {
        titleFormModal()
        reset(activeRole)
    }, [activeRole])

    useEffect(() => {
        if (typeof errorMessage === 'object') {
            for (const formValue of Object.keys(errorMessage)) {
                setError(formValue as keyof FormFields, {
                    message: (errorMessage as Record<string, string[]>)[formValue].toString()
                });
            }
        }
    }, [errorMessage]);


    return (
        <>
            <Modal
                open={open}
                onClose={() => {
                    handleOpen()
                    reset()
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyleFormModal}>
                    <Typography variant='h5' sx={{ mb: 1 }}>{modalTitle}</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Zoom in={true} style={{ transitionDelay: '150ms' }}>
                            <Grid container>
                                <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                                    <TextField
                                        disabled={loading}
                                        label="Nombre"
                                        placeholder='nombre'
                                        fullWidth
                                        {...register("nombre")}
                                        error={!!errors.nombre}
                                        helperText={errors.nombre?.message}
                                    />
                                </Grid>
                                <MultipleSelectButton
                                    name="permisos"
                                    label="Permisos"
                                    options={permisos}
                                    control={control}
                                    multiple={true}
                                />
                                <Grid size={{ xs: 12, sm: 12 }} container spacing={2} sx={{ mb: 2, mt: 2 }}>
                                    <Button type='submit' variant='contained' fullWidth loading={loading}>
                                        <SaveIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Zoom>
                    </form>
                </Box>
            </Modal>
        </>
    );
}


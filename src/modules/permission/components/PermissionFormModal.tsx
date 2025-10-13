import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid2';
import { Button, TextField, Typography, Zoom } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Permission, PermissionFormModalProps } from '../../../shared/interfaces/sharedInterfaces';
import { SubmitHandler, useForm } from "react-hook-form";
import { permissionSchema } from '../validators';
import { boxStyleFormModal } from '../../../helpers/boxStyle';



type FormFields = z.infer<typeof permissionSchema>;
export const PermissionFormModal = ({ open, handleOpen, loading, onSaveOrUptdate, modalTitle, titleFormModal, activePermission, errorMessage }: PermissionFormModalProps) => {
    const { register, handleSubmit, setError, formState: { errors, }, reset } = useForm<FormFields>({
        defaultValues: activePermission, resolver: zodResolver(permissionSchema)
    });

    const onSubmit: SubmitHandler<Permission> = async (data) => {
        await onSaveOrUptdate(data)
    };

    useEffect(() => {
        titleFormModal()
        reset(activePermission)
    }, [activePermission])

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


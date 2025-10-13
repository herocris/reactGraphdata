import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid2';
import { Button, TextField, Typography, Zoom } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import MapIcon from '@mui/icons-material/Map';

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ConfiscationFormProps } from '../../../shared/interfaces/sharedInterfaces';
import { SubmitHandler, useForm } from "react-hook-form";
import { confiscationSchema } from '../validators';
import { boxStyleFormModal } from '../../../helpers/boxStyle';
import { PhotoInput } from '../../../components/PhotoInput';
import { ConfiscationMapModal } from './ConfiscationMapModal';




type FormFields = z.infer<typeof confiscationSchema>;
export const ConfiscationForm = ({ open, handleOpen, loading, onSaveOrUptdate, modalTitle, titleFormModal, activeConfiscation, errorMessage }: ConfiscationFormProps) => {
    const [openMap, setOpenMap] = useState(false)
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, },
        reset,
        control
    } = useForm<FormFields>({
        defaultValues: activeConfiscation,
        resolver: zodResolver(confiscationSchema)
    });

    const onSubmit: SubmitHandler<z.infer<typeof confiscationSchema>> = async (data) => {
        await onSaveOrUptdate(data)
    };

    useEffect(() => {
        titleFormModal()
        reset(activeConfiscation)
    }, [activeConfiscation])

    useEffect(() => {
        if (typeof errorMessage === 'object') {
            for (const formValue of Object.keys(errorMessage)) {
                setError(formValue as keyof FormFields, {
                    message: (errorMessage as Record<string, string[]>)[formValue].toString()
                });
            }
        }
    }, [errorMessage]);

    const handleOpenMap = (open: boolean) => {
        console.log('alkdshflkjah');

        setOpenMap(open)
    }



    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: '54%',
                left: '57%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                boxShadow: 24,
                p: 4,
            }}>
                <Typography variant='h5' sx={{ mb: 1 }}>{'modalTitle'}</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Zoom in={true} style={{ transitionDelay: '150ms' }}>
                        <Grid container sx={{ alignItems: 'center', alignContent: 'center', display: 'flex' }}>
                            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                                <TextField
                                    disabled={loading}
                                    label="Fecha"
                                    placeholder='fecha'
                                    fullWidth
                                    {...register("fecha")}
                                    error={!!errors.fecha}
                                    helperText={errors.fecha?.message}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                                <TextField
                                    disabled={loading}
                                    label="Observacion"
                                    placeholder='observation'
                                    fullWidth
                                    {...register("observacion")}
                                    error={!!errors.observacion}
                                    helperText={errors.observacion?.message}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                                <TextField
                                    disabled={loading}
                                    label="Dirección"
                                    placeholder='direccion'
                                    fullWidth
                                    {...register("direccion")}
                                    error={!!errors.direccion}
                                    helperText={errors.direccion?.message}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                                <TextField
                                    disabled={loading}
                                    label="Departmento"
                                    placeholder='departamento'
                                    fullWidth
                                    {...register("departamento")}
                                    error={!!errors.departamento}
                                    helperText={errors.departamento?.message}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                                <TextField
                                    disabled={loading}
                                    label="Municipalidad"
                                    placeholder='municipalidad'
                                    fullWidth
                                    {...register("municipalidad")}
                                    error={!!errors.municipalidad}
                                    helperText={errors.municipalidad?.message}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12 }} container spacing={2} sx={{ mb: 1, mt: 2 }}>
                                <Button variant='outlined' fullWidth onClick={() => handleOpenMap(true)}>
                                    <MapIcon />
                                </Button>
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
            <ConfiscationMapModal open={openMap} handleOpen={handleOpenMap} />
        </>
    );
}


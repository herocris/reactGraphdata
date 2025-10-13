
import { Button, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import Grid from '@mui/material/Grid2';

import { useForm } from '../../../hooks/useForm';
import { RootState } from '../../../store';
import { startCreatingUserWithEmailPassword } from '../../../store/slices/auth';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Link } from 'react-router';


const formData = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
}
export const RegisterPage = () => {
    const { errorMessage } = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const { name, email, password, passwordConfirmation, onInputChange } = useForm(formData);


    const onSubmit = (event: any) => {
        event.preventDefault();
        if (password === passwordConfirmation) {
            dispatch(startCreatingUserWithEmailPassword({ name, email, password }));
        } else {
            alert('ambas claves deben coincidir');

        }

    }
    return (
        <AuthLayout title="Register">
            <form onSubmit={onSubmit} >
                <Grid container>
                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre"
                            placeholder='nombre'
                            fullWidth
                            name='name'
                            value={name}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Confirmar Contraseña"
                            type="password"
                            placeholder='Confirmar Contraseña'
                            fullWidth
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <div>{errorMessage as String}</div>

                    <Grid size={{ xs: 12, sm: 12 }} container spacing={2} sx={{ mb: 2, mt: 2 }}>

                        <Button variant='contained' fullWidth type="submit">
                            Login
                        </Button>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        
                        <Typography component={Link} color='info' to="/auth/login">
                            Ingresar
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
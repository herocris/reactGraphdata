
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../../hooks/useForm';
import { RootState } from '../../../store';
import { startLoginWithEmailPassword } from '../../../store/slices/auth';
//import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Link } from 'react-router';


const formData = {
    email: 'cris_itg@yahoo.es',
    password: 'password'
}
export const LoginPage = () => {
    const {  errorMessage } = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const { email, password, onInputChange } = useForm(formData);
    // const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event: any) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
    }
    return (
        
            <AuthLayout title="Login">


                <form onSubmit={onSubmit} >
                    <Grid container>
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
                        <div>{errorMessage as String}</div>

                        <Grid size={{ xs: 12, sm: 12 }} container spacing={2} sx={{ mb: 2, mt: 2 }}>

                            <Button variant='contained' fullWidth type="submit">
                                Login
                            </Button>

                        </Grid>
                        <Grid container direction='row' justifyContent='end'>
                            <Typography sx={{ mr: 1 }}>¿No tienes cuenta?</Typography>

                            <Typography component={Link} color='info' to="/auth/register">
                                Registrar
                            </Typography>
                        </Grid>
                    </Grid>
                </form>

            </AuthLayout>
       
    )
}
import { ConfiscationForm } from '../components'
import { GrapLayout } from '../../../shared/layout/GraphLayout'
import { BackFloatingButton } from '../../../components'
import { useLocation } from 'react-router'
import Grid from '@mui/material/Grid2';

export const CreateView = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <GrapLayout>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <BackFloatingButton />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ConfiscationForm/>
        </Grid>
      </Grid>
    </GrapLayout>
  )
}

import { GrapLayout } from "../../../shared/layout/GraphLayout"
import Grid from '@mui/material/Grid2';
import { FormMap } from "../components/FormMap";
import { useMap } from "../hooks/useMap";
import { MapComponent } from "../components/MapComponent";


export const MapView = () => {
    const { 
        ammunitionCollection, 
        drugCollection, 
        weaponCollection,  
        Mapitems,
        typeMap, 
        setMapType, 
        getMapData
    } = useMap()
    return (
        <GrapLayout>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 5, lg: 3 }}>
                    <FormMap
                        weaponCollection={weaponCollection}
                        drugCollection={drugCollection}
                        ammunitionCollection={ammunitionCollection}
                        setMapType={setMapType}
                        getMapData={getMapData}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 7, lg: 9 }}>
                    <MapComponent Mapitems={Mapitems} typeMap={typeMap} />
                </Grid>
            </Grid>
        </GrapLayout>
    )
}

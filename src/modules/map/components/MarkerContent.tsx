import { AmmunitionConfiscation, DrugConfiscation, MapItem, WeaponConfiscation } from '../../../shared/interfaces/sharedInterfaces'
import { getEnvVariables } from '../../../helpers/getEnvVariables';
import { CardMarkerContent } from './';


interface MarkerContentProps {
    marker: MapItem
}
const { VITE_LOCAL_PHOTOS_URL } = getEnvVariables();

export const MarkerContent = ({ marker }: MarkerContentProps) => {
    return (
        <div>
            {marker?.drug_confiscations.length > 0 && marker?.drug_confiscations.map((drug_conf: DrugConfiscation, index: number) => (
                <CardMarkerContent key={index} itemSubConfiscation={drug_conf} />
            ))}
            {marker?.weapon_confiscations.length > 0 && marker?.weapon_confiscations.map((weapon_conf: WeaponConfiscation, index: number) => (
                <CardMarkerContent key={index} itemSubConfiscation={weapon_conf} />
            ))}
            {marker?.ammunition_confiscations.length > 0 && marker?.ammunition_confiscations.map((ammunition_conf: AmmunitionConfiscation, index: number) => (
                <CardMarkerContent key={index} itemSubConfiscation={ammunition_conf} />
            ))}
        </div>


    )
}

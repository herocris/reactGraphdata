import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from "../../../store";
import { Confiscation } from "../../../shared/interfaces/sharedInterfaces";
import { useNavigate } from "react-router";
import { startSaveConfiscation, startUpdateConfiscation } from "../thunks";

export const useConfiscationForm = () => {
    
    const navigate = useNavigate();
    const [openMap, setOpenMap] = useState(false)
    const { activeConfiscation, loading, errorMessage } = useAppSelector((state: RootState) => state.confiscation);
    const dispatch = useAppDispatch();

    const [modalTitle, setModalTitle] = useState('')

    const onSaveOrUptdate = async (confiscation: Confiscation) => {
        console.log(confiscation);
        if (activeConfiscation.id === undefined) {
            await dispatch(startSaveConfiscation(confiscation)).then(() => {
                navigate(`/confiscation/edit/${activeConfiscation.identificador}`)
            })
        } else {
            await dispatch(startUpdateConfiscation({ ...confiscation, id: activeConfiscation.id })).then(() => {
                //navigate(`/confiscation/edit/${activeConfiscation.identificador}`)
            })
        }
    }


    const handleOpenMap = (open: boolean) => {
        setOpenMap(open)
    }

    const titleFormModal = () => activeConfiscation.id === undefined ? setModalTitle('Crear decomiso') : setModalTitle('Editar decomiso')

    // useEffect(() => {
    //     if (confiscationId) {
    //         dispatch(startLoadingConfiscation(confiscationId));
    //     }
    // }, [confiscationId]);

    useEffect(() => {
        titleFormModal()
    }, [activeConfiscation])

    return {
        loading,
        activeConfiscation,
        openMap,
        errorMessage,
        modalTitle,
        onSaveOrUptdate,
        handleOpenMap
    }
}

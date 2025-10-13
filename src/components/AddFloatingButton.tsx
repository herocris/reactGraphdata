import { Box, Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

interface AddFloatingButtonProps {
    handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const AddFloatingButton = ({ handleOpen }: AddFloatingButtonProps) => {
    return (
        <Box
            display="flex"
            justifyContent="end"
            marginTop={2}
        >
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
                <AddIcon />
            </Fab>
        </Box>
    )
}

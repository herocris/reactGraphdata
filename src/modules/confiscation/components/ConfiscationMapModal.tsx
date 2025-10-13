import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ConfiscationMapModalProps } from '../../../shared/interfaces/sharedInterfaces';


export const ConfiscationMapModal = ({ open, handleOpen }: ConfiscationMapModalProps) => {
    console.log(open);

    return (
        <>
            <Modal
                open={true}
                onClose={() => handleOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '54%',
                        left: '57%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        boxShadow: 24,
                        p: 4,
                    }}>
                    <h3>Content</h3>
                </Box>
            </Modal>
        </>
    );
}


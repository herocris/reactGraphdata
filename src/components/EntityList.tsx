import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Grow } from '@mui/material';
import { EntityListProps } from '../shared/interfaces/sharedInterfaces';
import { useEntityList } from '../hooks/useEntityList';

export const EntityList = ({ 
    handleOpen, 
    handleOpenDialog, 
    EntityCollection, 
    LoadingEntities, 
    columnsTable, 
    tableOptions, 
    loading, 
    setIdEntity, 
    editable=true 
}: EntityListProps) => {

    const { 
        TableColumns, 
        setValuePaginationModel, 
        setValueSortModel, 
        setValueFilterModel 
    } = useEntityList({ 
        handleOpen, 
        handleOpenDialog, 
        setIdEntity, 
        columnsTable, 
        LoadingEntities, 
        editable });

    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <Grow
                in={true}
                style={{ transformOrigin: '1 0 0' }}
                {...{ timeout: 1000 }}
            >
                <DataGrid
                    rows={EntityCollection}
                    loading={loading}
                    columns={TableColumns}
                    pagination
                    sortingMode="server"
                    filterMode="server"
                    paginationMode="server"
                    rowCount={tableOptions.total}
                    pageSizeOptions={[5, 10, 25, 100]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: tableOptions.per_page } },
                    }}
                    onPaginationModelChange={setValuePaginationModel}
                    onSortModelChange={setValueSortModel}
                    onFilterModelChange={setValueFilterModel}
                />
            </Grow>
        </Box>
    );
}

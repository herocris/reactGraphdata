import Box from '@mui/material/Box';
import { DataGrid, useGridApiRef, gridClasses, GridAutosizeOptions } from '@mui/x-data-grid';
import { Grow } from '@mui/material';
import { EntityListProps } from '../shared/interfaces/sharedInterfaces';
import { useEntityList } from '../hooks/useEntityList';
import { useEffect } from 'react';

export const EntityList = ({
    handleOpen,
    handleOpenDialog,
    EntityCollection,
    LoadingEntities,
    columnsTable,
    tableOptions,
    loading,
    setIdEntity,
    editable = true
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
        editable,
        tableOptions
    });

    // const apiRef = useGridApiRef();

    // useEffect(() => {
    //     const handleResize = () => {
    //         apiRef.current?.resize();
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    // const autosizeOptions: GridAutosizeOptions = {
    //     includeOutliers: true,
    //     includeHeaders:true,
    //     columns:TableColumns.map((TabCol)=>TabCol.field)
    // };

    return (

        <Grow
            in={true}
            style={{ transformOrigin: '1 0 0' }}
            {...{ timeout: 1000 }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxHeight: '60%' }} >

                <DataGrid
                    //disableAutosize ={true}
                    //autosizeOptions={autosizeOptions}
                    // getRowHeight={() => 'auto'}
                    // sx={{
                    //     [`& .${gridClasses.cell}`]: {
                    //         py: 0.1,
                    //     },
                    // }}
                    //apiRef={apiRef}
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
                        pagination: { paginationModel: { pageSize: tableOptions.per_page, page: tableOptions.current_page - 1 } },
                    }}
                    onPaginationModelChange={setValuePaginationModel}
                    onSortModelChange={setValueSortModel}
                    onFilterModelChange={setValueFilterModel}
                />
            </Box>
        </Grow>

    );
}

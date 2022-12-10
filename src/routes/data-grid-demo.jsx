import { Paper, Stack } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useMemo } from 'react';

const VISIBLE_FIELDS = [
  'traderName',
  'traderEmail',
  'quantity',
  'filledQuantity',
  'isFilled',
  'status',
  'incoTerm',
  'pnl',
  'counterPartyCountry',
  'dateCreated'
];


export default function DataGridDemoPage() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  const columns = useMemo(
    () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns],
  );

  return (
    <Stack direction="column" alignItems="center" height="100%">
      <Paper sx={{ width: 'calc(100% - 3vw)', height: '100%', margin: 3 }} elevation={2}>
        {/* <Typography variant="h4" component="h1" gutterBottom>All-in-one Table!</Typography> */}
        <DataGrid
          {...data}
          columns={columns}
          loading={data.rows.length === 0}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          // disableColumnFilter
          // disableColumnSelector
          // disableDensitySelector
        />
      </Paper>
    </Stack>
  );
}
export { DataGridDemoPage }
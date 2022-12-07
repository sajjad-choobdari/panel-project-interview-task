import { CssBaseline, Stack } from '@mui/material';
import { Link } from "react-router-dom";


function RootPage() {
  return (
    <Stack direction="column" alignItems="center" height="100%">
      <CssBaseline />
      <Link to="chart-demo">Chart Demo</Link>
      <Link to="data-grid-demo">Data Grid Demo</Link>
    </Stack>
  );
}

export { RootPage };

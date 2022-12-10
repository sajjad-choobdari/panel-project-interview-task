import { Stack, Paper, Typography } from '@mui/material';
import { Bar, BarChart, Tooltip, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import data from './bar-chart-data.json'

export default function BarChartDemoPage() {
  return (
    <Stack direction="column" alignItems="center" height="100%">
      <Paper sx={{ width: 'calc(100% - 3vw)', height: '100%', margin: 3, backgroundColor: '#313348', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} elevation={2}>
      <Typography color="white" component="h1" variant="h5" gutterBottom sx={{ mr: 'auto', ml: 2 }}>
        Bar Chart Demo
      </Typography>
      <ResponsiveContainer width="95%" height="94%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#0870FC" />
          <Bar dataKey="uv" fill="#D93547" />
        </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Stack>
  );
}
export { BarChartDemoPage }
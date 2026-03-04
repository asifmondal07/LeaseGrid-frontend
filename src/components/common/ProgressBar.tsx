import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LinearWithValueLabel({value}: {value: number}) {

    const getColor = (value: number) => {
        if (value < 20) {
            return '#e44c1eff';
        } else if (value < 60) {
            return '#fdee16ff';
        } else if(value < 100) {
            return '#12a0e2ff';
        }else{
            return '#1cee09';
        }
    }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={value}  
            sx={{
                height:8,
                borderRadius:2,
                backgroundColor: '#eee',
                '& .MuiLinearProgress-bar': {
                    backgroundColor: getColor(value),
                    borderRadius: 10,
                },
            }} 
            color='warning'
        />
      </Box>
      <Box sx={{ minWidth: 35, }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary',fontWeight:600 }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}


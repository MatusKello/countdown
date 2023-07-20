import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  const [countdown, setCountdown] = useState(0);

  const handleStart = () => {
    setCountdown(value);
    setValue(0);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountDown) => prevCountDown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        flexGrow: 1,
        maxWidth: '800px',
        margin: '10rem auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant='filled'
          type='number'
        />
        <Button onClick={handleStart} variant='outlined'>
          Start countdown
        </Button>
        <Typography variant='h2'>{countdown}</Typography>
      </Box>
    </Card>
  );
};

export default App;

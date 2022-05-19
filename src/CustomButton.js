import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ children, onClick }) {
  return (
    <div>
      <Button onClick={onClick} variant='contained'
        sx={{
          width: 300,
          border: 'solid 1px pink'
        }}
      >
        {children}
      </Button>
    </div>
  );
}

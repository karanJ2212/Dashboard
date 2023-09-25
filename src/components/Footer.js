import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme'; // Import your tokens function

export default function Footer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // Get your custom colors

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[800], // Use your custom color
        textAlign: 'left',
      }}
    >
      <Typography variant="body2">
        Copyright © Reslink, All rights reserved
      </Typography>
    </Box>
  );
}

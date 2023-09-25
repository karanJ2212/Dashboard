/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';

const StatBox = ({ title, subtitle, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: colors.greenAccent[600],
          }}
        >
          {icon}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h4">{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export default StatBox;

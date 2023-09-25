import {
  Box, Typography, useTheme, Paper,
} from '@mui/material';
import React from 'react';
import { tokens } from '../theme';

const Activities = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'Resume Review',
    time: '10:30 AM',
  },
  {
    id: 2,
    description: 'Nulla facilisi. Vestibulum condimentum vehicula lorem.',
    status: 'Interview',
    time: '2:45 PM',
  },
  {
    id: 3,
    description: 'Vestibulum vel est vitae enim congue euismod.',
    status: 'Task',
    time: '8:15 AM',
  },
  {
    id: 4,
    description: 'Fusce dignissim, elit eget efficitur malesuada.',
    status: 'Payment',
    time: '3:30 PM',
  },
  {
    id: 5,
    description: 'Pellentesque habitant morbi tristique senectus.',
    status: 'Closed',
    time: '9:00 AM',
  },
  {
    id: 6,
    description: 'Aenean eget odio eu enim efficitur malesuada.',
    status: 'Payment',
    time: '1:20 PM',
  },
];

export default function RecentActivities() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resume Review':
        return colors.redAccent[500];
      case 'Interview':
        return colors.redAccent[100];
      case 'Task':
        return colors.greenAccent[500];
      case 'Payment':
        return colors.primary[100];
      case 'Closed':
        return colors.primary[100];
      case 'Paymentt':
        return colors.greenAccent[900];
      default:
        return colors.grey[100]; // Default color
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
        p: 2,
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${colors.grey[200]}`,
      }}
    >
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        borderBottom={`1px solid ${colors.grey[200]}`}
      >
        <Typography variant="h4" component="p" color={colors.grey[100]}>
          Recent Activities
        </Typography>
      </Box>

      <Box>
        {Activities.map((project) => (
          <Paper
            key={project.id}
            sx={{
              backgroundColor: colors.primary[800],
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              my: 1,
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: getStatusColor(project.status),
                  marginRight: '5px',
                }}
              />
              <Typography variant="h6" color={colors.text} textAlign="left">
                {project.description}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color={colors.text} ml={1}>
                {project.time}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

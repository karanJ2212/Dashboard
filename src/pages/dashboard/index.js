import React from 'react';

import { Box, useTheme } from '@mui/material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PersonIcon from '@mui/icons-material/Person';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { tokens } from '../../theme';
import RecentActivities from '../../components/RecentActivities';
import PostedProjects from '../../components/PostedProjects';
import Header from '../../components/Header';

import StatBox from '../../components/StatBox';

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" padding="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Welcome back, Karan"
          subtitle="Track, manage researchers and submissions"
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="80px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="07"
            subtitle="Active Projects"
            icon={
              <PersonIcon sx={{ color: colors.grey[100], fontSize: '26px' }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="04"
            subtitle="Proposals"
            icon={(
              <EditNoteIcon
                sx={{ color: colors.grey[100], fontSize: '26px' }}
              />
            )}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="03"
            subtitle="Active Jobs"
            icon={(
              <PersonAddIcon
                sx={{ color: colors.grey[100], fontSize: '26px' }}
              />
            )}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="240"
            subtitle="Application"
            icon={(
              <RemoveRedEyeIcon
                sx={{ color: colors.grey[100], fontSize: '26px' }}
              />
            )}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 0"
          backgroundColor={colors.primary[400]}
        >
          <PostedProjects />
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 0"
          backgroundColor={colors.primary[400]}
        >
          <RecentActivities />
        </Box>
      </Box>
    </Box>
  );
}

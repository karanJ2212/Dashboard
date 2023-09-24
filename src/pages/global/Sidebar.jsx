/* eslint-disable react/prop-types */
import { useState } from 'react';

import {
  Sidebar, Menu, MenuItem, sidebarClasses,
} from 'react-pro-sidebar';
import {
  Avatar, Box, Typography, useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import LayersIcon from '@mui/icons-material/Layers';
import GroupIcon from '@mui/icons-material/Group';
import ForumIcon from '@mui/icons-material/Forum';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { tokens } from '../../theme';
import { logo, user } from '../../assets';

const Item = ({
  title, to, icon, selected, setSelected,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SideNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: 'transparent !important',
            background: `${colors.primary[400]} !important`,
          },
        }}
      >
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: ({ active }) => {
              const buttonStyles = {};

              if (active) {
                buttonStyles.backgroundColor = `${colors.primary[400]} !important`;
              }

              if (!active) {
                buttonStyles.backgroundColor = 'inherit';
              }

              buttonStyles['&:hover, &:active'] = {
                backgroundColor: `${colors.primary[900]} !important`,
              };

              return buttonStyles;
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  style={{
                    width: '160px',
                    height: '42px',
                    background: '#fff',
                    padding: '5px',
                  }}
                />
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : '10%'} marginRight="10px">
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Projects"
              to="/Project"
              icon={<LayersIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Staffing"
              to="/Staffing"
              icon={<GroupIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Messages"
              to="/Messages"
              icon={<ForumIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Add Staff"
              to="/form"
              icon={<GroupAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Box height="200px" />
            <Item
              title="support"
              icon={<SupportAgentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/faq"
              icon={<SettingsSuggestIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
        <Box
          borderTop={`1px solid ${colors.grey[200]}`}
          padding="10px"
          textAlign="center"
          display="flex"
        >
          {/* User information */}
          <Avatar
            alt="User Profile"
            src={user}
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              margin: '0 auto',
            }}
          />
          <Box textAlign="left" marginLeft="16px">
            <Typography variant="subtitle1">Karan Jain</Typography>
            <Typography variant="body2">karanjain2212@gmail.com</Typography>
          </Box>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default SideNavbar;

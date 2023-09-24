/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Sidebar, Menu, MenuItem, sidebarClasses,
} from 'react-pro-sidebar';
import {
  Avatar, Box, IconButton, Typography, useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
// import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

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

        {/* component=
      <Link to={to} /> */}
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
                {/* <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography> */}
                <img
                  src={logo}
                  alt="Company Logo"
                  style={{
                    width: '160px', // Adjust the width as needed
                    height: '42px', // Adjust the height as needed to match the Typography
                    background: '#fff',
                    padding: '5px',
                  }}
                />
                {/* <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton> */}
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
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Staffing"
              to="/Staffing"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Messages"
              to="/Messages"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Add Staff"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Box height="200px" />
            <Item
              title="support"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
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
          <Box textAlign="left">
            <Typography variant="subtitle1">John Doe</Typography>
            {' '}
            <Typography variant="body2">john.doe@example.com</Typography>
            {' '}
          </Box>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default SideNavbar;

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addStaff } from '../../redux/staffSlice';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

export default function Staffing() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const staffList = useSelector((state) => state.staff.staffList);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user')) || [];

    setUsers(userData);
  }, []);

  const deleteUser = (userId) => {
    dispatch(addStaff(staffList.filter((user) => user.id !== userId)));

    localStorage.setItem(
      'user',
      JSON.stringify(users.filter((user) => user.id !== userId)),
    );

    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell />
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow key={user.phone}>
            <TableCell>{user.id}</TableCell>

            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
}

import styled from '@emotion/styled';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@mui/material';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addStaff } from '../../redux/staffSlice';

const Container = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 5% auto;
  margin-left: 2%;
  & > div {
    margin-top: 20px;
  }
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormControlStyled = styled(FormControl)`
  width: 100%;
`;

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

export default function AddStaff() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [user, setUser] = useState(initialValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUserDetails = () => {
    dispatch(addStaff(user));

    navigate('/Staffing');
  };

  return (
    <Container>
      <Title>Add User</Title>
      <FormControlStyled>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControlStyled>
      <FormControlStyled>
        <InputLabel>User name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControlStyled>
      <FormControlStyled>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControlStyled>
      <FormControlStyled>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControlStyled>
      <FormControlStyled>
        <Button variant="contained" onClick={() => AddUserDetails()}>
          Add User
        </Button>
      </FormControlStyled>
    </Container>
  );
}

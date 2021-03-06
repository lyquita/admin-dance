import {
  Alert,
  Avatar,
  Box,
  Button,
  Grid,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { width } from '@mui/system';
import * as React from 'react';
import Layout from '../components/global/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../untils/axiosInstance';
import CloseIcon from '@mui/icons-material/Close';

const UserInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [edited, setEdited] = useState('false');
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [admin, SetAdmin] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFlag, setSelectFlag] = useState(false);
  const [avatarToast, setAvatarToast] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  console.log('param', params.username);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSelectedFile(event.target);
    setSelectedFile((event.target as HTMLInputElement).files[0]);
    setSelectFlag(true);

    const formData = new FormData();
    formData.append('avatar', (event.target as HTMLInputElement).files[0]);
    axiosInstance.post('/user/avatar/upload', formData,  { headers: { 'Content-Type': 'multipart/form-data' } })
    .then(data => setAvatarToast(true))
    .catch(err=> <Alert severity="error">Update avatar fail! {err}</Alert>);    
  };

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((event.target as HTMLInputElement).value);
  };

  const updateEmail = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setEmail((event.target as HTMLInputElement).value);
  } ;

  const handleSubmit = () => {
    axiosInstance.post('/user/info', {username: username, email: email})
    .then(data => setSaveToast(true))
    .catch(err=> console.log('sbmit err', err));
    
    setEdited('false');
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAvatarToast(false);
    setSaveToast(false);
  };

  useEffect(() => {
    axiosInstance
      .get(`/user/info?username=${params.username}`)
      .then((res) => {
        if (res.data) {
          setUsername(res.data.username);
          setEmail(res.data.email);
          SetAdmin(res.data.admin);
          setAvatar(res.data.avatar);
        }
      })
      .catch((err) => Promise.reject(err));
  }, [edited, avatar, params]);

  return (
    <>
      {edited == 'false' ? (
        <>
          <>
            <Layout />
            <Grid
              container
              direction='row'
              sx={{ padding: '100px 20px 50px 20px' }}
            >
              <Grid
                item
                sx={{
                  background: 'white',
                  padding: '20px 10%',
                  display: 'flex',
                  width: '100%',
                  borderRadius: '4px',
                  boxShadow:
                    'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(63 63 68 / 15%) 0px 1px 2px 0px',
                  transition:
                    'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                }}
              >
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                  <ListItem>
                    <Avatar
                      src={avatar}
                      sx={{ width: '100px', height: '100px' }}
                    >
                      {' '}
                    </Avatar>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary='Username'
                      sx={{ marginRight: '10px' }}
                    />
                    <TextField value={username} disabled></TextField>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary='Email'
                      sx={{ marginRight: '10px' }}
                    />
                    <TextField value={email} disabled>
                    </TextField>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary='Admin'
                      sx={{ marginRight: '10px' }}
                    />
                    <TextField value={admin} disabled>
                    </TextField>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant='outlined'
                      sx={{ marginRight: '10px' }}
                      onClick={() => setEdited('true')}
                    >
                      Edit
                    </Button>
                    <Button variant='outlined' onClick={() => navigate(-1)}>
                      Back
                    </Button>
                  <Snackbar open={saveToast} autoHideDuration={6000} message='Data saved!' onClose={handleClose}/>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </>
        </>
      ) : (
        <>
          <Layout />
          <Grid
            container
            direction='row'
            sx={{ padding: '100px 20px 50px 20px' }}
          >
            <Grid
              item
              sx={{
                background: 'white',
                padding: '20px 10%',
                display: 'flex',
                width: '100%',
                borderRadius: '4px',
                boxShadow:
                  'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(63 63 68 / 15%) 0px 1px 2px 0px',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              }}
            >
              <List sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItem>
                  <Avatar src={avatar} sx={{ width: '100px', height: '100px' }}>
                  </Avatar>
                    <List>
                      <ListItem>
                        <input type='file' id='image-upload' style={{'display': 'none'}} onChange={handleUpload}/>
                        <label htmlFor='image-upload'>
                        <Button component='span' variant='contained'>Upload</Button>
                          </label>
                          <Snackbar open={avatarToast} autoHideDuration={6000} message='Update avatar successfully!' onClose={handleClose}/>
                      </ListItem>
                    </List>

                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Username'
                    sx={{ marginRight: '10px' }}
                  />
                  <TextField defaultValue={username} onChange={updateUsername}>  </TextField>
                </ListItem>
                <ListItem>
                  <ListItemText primary='Email' sx={{ marginRight: '10px' }} />
                  <TextField defaultValue={email} onChange={updateEmail}> </TextField>
                </ListItem>
                <ListItem>
                  <ListItemText primary='Admin' sx={{ marginRight: '10px' }} />
                  <TextField value={admin} disabled> </TextField>
                </ListItem>
                <ListItem>
                  <Button
                    variant='outlined'
                    sx={{ marginRight: '10px' }}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </>
      )}
      ;
    </>
  );
};

export default UserInfo;

import {
  Avatar,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { width } from '@mui/system';
import * as React from 'react';
import Layout from '../components/global/Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../untils/axiosInstance';
import CloseIcon from '@mui/icons-material/Close';

const UserInfo = () => {
  const navigate = useNavigate();
  const [edited, setEdited] = useState('false');
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [admin, SetAdmin] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFlag, setSelectFlag] = useState(false);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSelectedFile(event.target);
    setSelectedFile((event.target as HTMLInputElement).files[0]);
    setSelectFlag(true);
    console.log('file', (event.target as HTMLInputElement).files[0]);
  };

  const handleSave = () => {
    setEdited('false');
    
  };

  useEffect(() => {
    axiosInstance
      .get('/user/info')
      .then((res) => {
        if (res.data) {
          console.log('info', res.data);
          setUsername(res.data.username);
          setEmail(res.data.email);
          SetAdmin(res.data.admin);
          setAvatar(res.data.avatar);
        }
      })
      .catch((err) => Promise.reject(err));
  }, [edited, username, email, admin]);

  return (
    <>
      {edited == 'false' ? (
        <>
          <>
            {console.log('render', username)}
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
                      {' '}
                    </TextField>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary='Admin'
                      sx={{ marginRight: '10px' }}
                    />
                    <TextField value={admin} disabled>
                      {' '}
                    </TextField>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant='outlined'
                      sx={{ marginRight: '10px' }}
                      onClick={() => setEdited('true')}
                    >
                      {' '}
                      Edit{' '}
                    </Button>
                    <Button variant='outlined' onClick={() => navigate(-1)}>
                      {' '}
                      Back{' '}
                    </Button>
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
                  {
                    selectedFlag == false ? <> 
                     <input type='file' id='image-upload' style={{'display': 'none'}} onChange={handleUpload}/>
                      <label htmlFor='image-upload'>
                      <Button component='span'>Upload</Button>
                      </label>
                    </> : <> 
                    <List>
                      <ListItem>
                        <ListItemText >{selectedFile.name}</ListItemText>
                        <input type='file' id='image-upload' style={{'display': 'none'}} onChange={handleUpload}/>
                      <label htmlFor='image-upload'>
                        <ListItemButton component='span'>
                          <CloseIcon />
                          </ListItemButton>
                          </label>
                      </ListItem>
                    </List>
                    </>
                  }
                 
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Username'
                    sx={{ marginRight: '10px' }}
                  />
                  <TextField value={username}> </TextField>
                </ListItem>
                <ListItem>
                  <ListItemText primary='Email' sx={{ marginRight: '10px' }} />
                  <TextField value={email}> </TextField>
                </ListItem>
                <ListItem>
                  <ListItemText primary='Admin' sx={{ marginRight: '10px' }} />
                  <TextField value={admin}> </TextField>
                </ListItem>
                <ListItem>
                  <Button
                    variant='outlined'
                    sx={{ marginRight: '10px' }}
                    onClick={handleSave}
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

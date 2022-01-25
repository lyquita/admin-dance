import React, { FC } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dog from '../../assets/svgs/Dog';
import Tushe from '../../assets/svgs/Tushe';
import Chigua from '../../assets/Chigua';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  ListItemButton,
  Stack,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from 'react-feather';
import { LayoutProps } from '../../interfaces/Layout';
import axiosInstance from '../../untils/axiosInstance';
import useAdmin from '../../hooks/useAdmin';

const drawerWidth = 200;

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('Username');
  const [avatar, setAvatar] = React.useState(null);
  const [logoutToast, setLogoutToast] = React.useState(false);
  const { admin } = useAdmin();
  let menuItems = [];

  React.useEffect(() => {
    axiosInstance
      .get('/user/info')
      .then((res) => {
        if (res.data) {
          setUsername(res.data.username);
          setAvatar(res.data.avatar);
          localStorage.setItem('admin', res.data.admin);
        }
      })
      .catch((err) => Promise.reject(err));
  }, [avatar]);

  if (admin) {
    menuItems = [
      {
        text: 'Dashboard',
        icon: <Tushe />,
        path: '/dashboard',
      },
      {
        text: 'Course',
        icon: <Chigua />,
        path: '/course',
      },
      {
        text: 'User',
        icon: <Chigua />,
        path: '/user',
      },
    ];
  } else {
    menuItems = [
      {
        text: 'Dashboard',
        icon: <Tushe />,
        path: '/dashboard',
      },
      {
        text: 'Course',
        icon: <Chigua />,
        path: '/course',
      },
    ];
  }

  console.log('menuItem', typeof menuItems);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOutToast = () => {
    setLogoutToast(true);
  };

  const handleLogOut = () => {
    navigate('/login');
  };

  const handleEdit = () => {
    navigate(`/account/${username}`);
  };

  const handleCloseAction = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setLogoutToast(false);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <Chigua />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Dog, dont cry..
          </Typography>
          <Button onClick={handleLogOutToast} sx={{ color: 'white' }}>
            Log out
          </Button>
          <Dialog
            open={logoutToast}
            onClose={handleCloseAction}
            aria-labelledby='logout-title'
          >
            <DialogTitle id='logout-title'>
              Are you sure to log out?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleCloseAction} variant='contained'>
                Cancel
              </Button>
              <Button onClick={handleLogOut}>Log out</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader sx={{ height: '200px' }}>
          <Grid container direction='column' height='100%'>
            <Grid item display='flex' justifyContent='flex-end'>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </Grid>
            <Grid item display='flex' flexDirection='column'>
              <Stack spacing={2} alignItems='flex-start' padding='0 30px'>
                <Box
                  sx={{
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    alt='avatar'
                    src={avatar}
                    sx={{ height: '100%', width: '100%' }}
                  ></Avatar>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography>{username}</Typography>
                  <EditIcon onClick={handleEdit} />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} alignItems='center'>
              <ListItemButton>
                <Link to={item.path} style={{ textDecoration: 'none' }}>
                  <ListItemIcon sx={{ width: '25px', height: '25px' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Layout;

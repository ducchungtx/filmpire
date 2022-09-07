import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';

function NavBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const isAuthenticated = false;

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          ><Menu />
          </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {!isMobile && 'Search...'}
        <div>
          { !isAuthenticated ? (
            <Button color="inherit" onClick={() => {}}>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/profile/123" className={classes.linkButton} onClick={() => {}}>
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar style={{ width: 30, height: 30 }} alt="Profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlII_y0zqhooJ5MiL1Rhv5MdDBW4m1SsTSVg&usqp=CAU" />
            </Button>
          ) }
        </div>
        {isMobile && 'Search...'}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

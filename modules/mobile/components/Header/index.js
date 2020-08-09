import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>

            <Link href="/">
              <Typography variant="h6">E-Commerce Frontend</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;

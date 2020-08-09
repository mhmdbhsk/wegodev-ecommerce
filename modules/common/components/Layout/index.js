import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MobileHeader from '@mobile/components/Header';

const useStyles = makeStyles({
  content: {
    marginTop: 74,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <MobileHeader />
      <div className={classes.content}>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;

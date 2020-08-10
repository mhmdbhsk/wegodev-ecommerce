import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Grid, Typography } from '@material-ui/core';
import { Star, StarHalf } from '@material-ui/icons';

import yellow from '@material-ui/core/colors/yellow';

const useStyles = makeStyles({
  root: {
    justifyContent: 'flex-end',
  },
  star: {
    fontSize: 12,
    color: yellow[800],
  },
});

const ProductRating = ({ rating, sold, alignRight }) => {
  const classes = useStyles();
  const starsComponent = [];

  const modulus = rating % 1;
  const ratingCountFloored = Math.floor(rating);

  for (let i = 0; i < ratingCountFloored; i++) {
    starsComponent.push(<Star key={i} className={classes.star} />);
  }

  if (modulus >= 0.5) {
    starsComponent.push(
      <StarHalf key={'half-star'} className={classes.star} />
    );
  }

  return (
    <>
      <Grid
        container
        alignItems="center"
        className={clsx({ [classes.root]: alignRight })}
      >
        {starsComponent}
        <Typography variant="caption">{`(${sold})`}</Typography>
      </Grid>
    </>
  );
};

ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  alignRight: PropTypes.bool,
};

export default ProductRating;

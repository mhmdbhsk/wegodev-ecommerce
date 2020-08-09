import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
  },
  image: {
    height: 140,
  },
  price: {
    lineHeight: 'normal',
  },
});

const ProductCard = ({
  img,
  title,
  promoLabel,
  price,
  rating,
  sold,
  productId,
}) => {
  const classes = useStyles();

  return (
    <>
      <Card>
        <div className={classes.card}>
          <CardMedia className={classes.image} image={img} title={title} />
          <CardContent>
            <Grid container direction="column">
              <Typography gutterBottom variant="subtitle2" component="h2">
                {title}
              </Typography>
              <Typography variant="overline" className={classes.price}>
                {price}
              </Typography>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  promoLabel: PropTypes.array,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  sold: PropTypes.number,
  productId: PropTypes.number.isRequired,
};

export default ProductCard;

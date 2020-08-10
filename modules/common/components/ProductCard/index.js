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

import PromoLabel from '@common/components/PromoLabel';
import ProductRating from '@common/components/ProductRating';

import { currencyFormatter } from '@utils/currency';

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
  relative: {
    position: 'relative',
  },
  promoLabel: {
    position: 'absolute',
    bottom: 6,
    left: 4,
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
          <div className={classes.relative}>
            <CardMedia className={classes.image} image={img} title={title} />
            <div className={classes.promoLabel}>
              <PromoLabel promoLabel={promoLabel} />
            </div>
          </div>
          <CardContent>
            <Grid container direction="column">
              <Typography gutterBottom variant="subtitle2" component="h2">
                {title}
              </Typography>
              <Typography variant="overline" className={classes.price}>
                {currencyFormatter(price)}
              </Typography>
              <ProductRating rating={rating} sold={sold} />
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

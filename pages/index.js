import { Container, Grid } from '@material-ui/core';

import Layout from '@common/components/Layout';
import ProductCard from '@common/components/ProductCard';

const HomePage = ({ products }) => {
  const { list } = products;

  return (
    <>
      <Layout>
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            {list.map((item) => {
              return (
                <Grid key={item.id} item xs={6} sm={6}>
                  <ProductCard
                    productId={item.id}
                    img={item.img}
                    title={item.name}
                    promoLabel={item.promo}
                    price={item.price}
                    rating={item.rating}
                    sold={item.sold}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default HomePage;

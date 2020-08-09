const HomePage = ({ products }) => {
  const { list } = products;

  return (
    <>
      {list.map((item) => {
        return <p>{item.name}</p>;
      })}
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

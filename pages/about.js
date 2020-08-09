import Head from 'next/head';
import Link from 'next/link';
import { Avatar, Chip } from '@material-ui/core';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>Hello World!</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Avatar alt="Muhammad Bhasaka" src="https://mhmdbhsk.space/avatar.webp" />
      <Chip label="Muhammad Bhaska" />
    </>
  );
};

export default About;

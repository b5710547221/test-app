import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MantineProvider } from '@mantine/core';
import  MyApp from './_app';

const Home: NextPage = () => {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'light',
      
    }}
  >
    <MyApp />
  </MantineProvider>
  );
}

export default Home

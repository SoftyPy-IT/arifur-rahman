import HomePage from '@/components/HomePage';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
    <Head>
        <title>Arifur Rahman</title>
        <meta name="description" content="Official website of Arifur Rahman" />
      </Head>
       <main>
       <HomePage/>
       </main> 
    </>
  );
};

export default page;
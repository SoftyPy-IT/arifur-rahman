import HomePage from '@/components/HomePage';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
      <Head>
        <title>Mojumder Arifur Rahman</title>
        <meta name="description" content="Official website of Mojumder Arifur Rahman, Businessmen." />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default page;
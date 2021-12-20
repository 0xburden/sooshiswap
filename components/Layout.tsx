import React from 'react';
import Head from 'next/head'
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Sooshiwap | Swap things here, perhaps</title>
      </Head>

      <div className="bg-gray-900 text-white flex justify-center min-h-screen w-full">
        <div className="flex-1 p-4 max-w-6xl">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}

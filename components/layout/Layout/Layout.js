import React from 'react';
import cn from './Layout.module.css';
import Head from 'next/head';
import Navbar from '../Navbar/Navbar';

function Layout({ children }) {
  return (
    <div className={cn.body}>
      <Head>
        <title>Blogeton</title>
      </Head>
      <Navbar />
      <main className={cn.content}>{children}</main>
    </div>
  );
}

export default Layout;

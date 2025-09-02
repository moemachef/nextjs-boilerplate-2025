import React, { type ReactNode } from 'react';
import Head from 'next/head';
import styles from './BasicLayout.module.scss';

export interface BasicLayoutProps {
  title?: string;
  children: ReactNode;
}

export default function BasicLayout({ title = 'App', children }: BasicLayoutProps) {
  return (
    <div className={styles.root}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
}

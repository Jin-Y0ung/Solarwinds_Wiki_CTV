import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Solarwinds Wiki" description="Your Solarwinds Documentation Hub">
      <header className={styles.heroBanner}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Solarwinds Wiki</h1>
          <p className={styles.subtitle}>Your go-to resource for Solarwinds documentation.</p>
        </div>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.sidebar}>
          <ul>
            <li><a href="/docs/intro">Getting Started</a></li>
            <li><a href="/docs/guides">Guides</a></li>
            <li><a href="/docs/reference">CLI Reference</a></li>
            <li><a href="/docs/clients">Clients</a></li>
            <li><a href="/docs/invoices">Invoices</a></li>
            <li><a href="/docs/projects">Projects</a></li>
            <li><a href="/docs/reports">Reports</a></li>
          </ul>
        </div>
        <div className={styles.content}>
          <h2>Getting Started</h2>
          <p>
            This wiki provides detailed documentation on Solarwinds tools and best practices.
          </p>
          <h3>Install</h3>
          <p>To get started, install the CLI using the npm package manager:</p>
          <pre><code>npm install -g solarwinds-cli</code></pre>
        </div>
      </main>
    </Layout>
  );
}

import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Solarwinds Wiki" description="Your go-to resource for Solarwinds documentation.">
      <div className={styles.heroBanner}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Solarwinds Wiki</h1>
          <p className={styles.subtitle}>Your go-to resource for Solarwinds documentation.</p>
        </div>
      </div>

      {/* 📌 버튼 섹션만 남김 */}
      <div className={styles.buttonContainer}>
        {/* 🔥 최상단 버튼 - Qcell Web Wiki */}
        <a href="https://jin-y0ung.github.io/Solarwinds_Wiki_CTV/docs/intro" className={styles.primaryButton} target="_blank" rel="noopener noreferrer">
          🔥 Qcell Focused Web Wiki
        </a>

        {/* 📚 Solarwinds 공식 문서 */}
        <a href="https://documentation.solarwinds.com/" className={styles.mainButton} target="_blank" rel="noopener noreferrer">
          📚 Online Documentations for Solarwinds
        </a>

        {/* 🎯 NPM 관련 문서 */}
        <a href="https://documentation.solarwinds.com/archive/pdf/npm/NPM_Getting_Started_Guide_1_Get_Started.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          🚀 NPM Getting Started Guide
        </a>
        <a href="https://documentation.solarwinds.com/archive/pdf/npm/NPM_Getting_Started_Guide_2_Customize.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          🎨 NPM Getting Started - Customize
        </a>
        <a href="https://documentation.solarwinds.com/archive/pdf/npm/NPM_Administrator_Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          📖 NPM Administrator Guide
        </a>

        {/* 🎯 SAM 관련 문서 */}
        <a href="https://documentation.solarwinds.com/archive/pdf/SAM/SAM_Getting_Started_Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          🚀 SAM Getting Started Guide
        </a>
        <a href="https://documentation.solarwinds.com/archive/pdf/SAM/SAM_Administrator_Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          📖 SAM Administrator Guide
        </a>

        {/* 🎯 DPA 관련 문서 */}
        <a href="https://documentation.solarwinds.com/archive/pdf/dpa/dpaadministratorguide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          🚀 DPA Getting Started Guide
        </a>
        <a href="https://documentation.solarwinds.com/archive/pdf/dpa/dpaadministratorguide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          📖 DPA Administrator Guide
        </a>

        {/* 🎯 Log Analyzer 관련 문서 */}
        <a href="https://documentation.solarwinds.com/archive/pdf/LA/LA-Getting-Started-Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          🛠 Log Analyzer Getting Started Guide
        </a>
        <a href="https://documentation.solarwinds.com/archive/pdf/la/LA-Admin-Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          📑 Log Analyzer Administrator Guide
        </a>
      </div>
    </Layout>
  );
}

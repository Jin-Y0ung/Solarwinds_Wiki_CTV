import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Solarwinds Wiki" description="Your go-to resource for Solarwinds documentation.">
      <main className={styles.main}>

        {/* 🌟 최우선 버튼 - Qcell Focused Web Wiki */}
        <div className={styles.mainButtonContainer}>
          <a href="https://jin-y0ung.github.io/Solarwinds_Wiki_CTV/docs/intro" className={styles.primaryButton} target="_blank" rel="noopener noreferrer">
            🔥 Qcell Focused Web Wiki
          </a>
        </div>

        {/* 🌟 중앙 메인 버튼 - Solarwinds 공식 문서 */}
        <div className={styles.mainButtonContainer}>
          <a href="https://documentation.solarwinds.com/" className={styles.mainButton} target="_blank" rel="noopener noreferrer">
            📚 Online Documentations for Solarwinds
          </a>
        </div>

        {/* 🔹 NPM 관련 문서 */}
        <div className={styles.buttonContainer}>
          <h3>Network Performance Monitor (NPM) Documentation</h3>
          <a href="https://documentation.solarwinds.com/archive/pdf/npm/NPM_Getting_Started_Guide_1_Get_Started.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            🚀 NPM Getting Started Guide
          </a>
          <a href="https://documentation.solarwinds.com/archive/pdf/npm/NPM_Getting_Started_Guide_2_Customize.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            🎨 NPM Getting Started - Customize
          </a>
          <a href="https://documentation.solarwinds.com/archive/pdf/npm/NPM_Administrator_Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            📖 NPM Administrator Guide
          </a>
        </div>

        {/* 🔹 SAM 관련 문서 */}
        <div className={styles.buttonContainer}>
          <h3>Server & Application Monitor (SAM) Documentation</h3>
          <a href="https://documentation.solarwinds.com/archive/pdf/SAM/SAM_Getting_Started_Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            🚀 SAM Getting Started Guide
          </a>
          <a href="https://documentation.solarwinds.com/archive/pdf/SAM/SAM_Administrator_Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            📖 SAM Administrator Guide
          </a>
        </div>

        {/* 🔹 DPA 관련 문서 */}
        <div className={styles.buttonContainer}>
          <h3>Database Performance Analyzer (DPA) Documentation</h3>
          <a href="https://documentation.solarwinds.com/archive/pdf/dpa/dpaadministratorguide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            🚀 DPA Getting Started Guide
          </a>
          <a href="https://documentation.solarwinds.com/archive/pdf/dpa/dpaadministratorguide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            📖 DPA Administrator Guide
          </a>
        </div>

        {/* 🔹 Log Analyzer 관련 문서 */}
        <div className={styles.buttonContainer}>
          <h3>Log Analyzer Documentation</h3>
          <a href="https://documentation.solarwinds.com/archive/pdf/LA/LA-Getting-Started-Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            🛠 Log Analyzer Getting Started Guide
          </a>
          <a href="https://documentation.solarwinds.com/archive/pdf/la/LA-Admin-Guide.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            📑 Log Analyzer Administrator Guide
          </a>
        </div>

      </main>
    </Layout>
  );
}

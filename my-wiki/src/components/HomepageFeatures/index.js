import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comprehensive Documentation',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        Find all the essential guides, CLI references, and troubleshooting steps for Solarwinds products.
      </>
    ),
  },
  {
    title: 'Efficient Workflow',
    Svg: require('@site/static/img/workflow.svg').default,
    description: (
      <>
        Streamline your workflow with detailed documentation on project management, client handling, and automated reports.
      </>
    ),
  },
  {
    title: 'Community-Driven',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        Contribute to the wiki, share insights, and improve documentation for everyone in the Solarwinds ecosystem.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

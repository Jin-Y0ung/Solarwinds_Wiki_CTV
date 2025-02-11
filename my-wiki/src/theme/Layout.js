import React from 'react';
import Layout from '@theme-original/Layout';
import Chatbot from '@site/src/components/Chatbot';

export default function LayoutWrapper(props) {
    console.log("✅ Custom Layout.js is loaded!");
  return (
    <>
      <Layout {...props} />
      <Chatbot />
    </>
  );
}

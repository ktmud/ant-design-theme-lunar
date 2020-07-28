import Head from 'next/head';
import { Divider, Row, Col } from 'antd';
import FormDemo from './demos/FormDemo';

export default () => (
  <div style={{ maxWidth: 1200, paddingBottom: 60 }}>
    <Head>
      <title>Lunar + Ant Design</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container">
      <h1 className="title">
        <a href="https://ant.design/" target="_blank" rel="noreferrer">
          Ant Design
        </a>
        {' + '}
        <a
          href="https://github.com/airbnb/lunar"
          target="_blank"
          rel="noreferrer"
        >
          Lunar
        </a>
      </h1>
    </div>
    <Row>
      <Col span={6} className="sidebar">
        <h2>Form</h2>
      </Col>
      <Col span={12}>
        <FormDemo />
      </Col>
      <Col span={4}>
        <a
          href="https://airbnb.io/lunar/?path=/story/forms-form--with-all-fields"
          target="_blank"
        >
          Compare with Lunar
        </a>
      </Col>
    </Row>
  </div>
);

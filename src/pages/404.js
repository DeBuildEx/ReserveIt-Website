import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>صفحه مورد نظر پیدا نشد</h2>
          <Link to="/">صفحه اصلی</Link>
        </div>
      </header>
    </section>
  </Layout>
);

export default IndexPage;

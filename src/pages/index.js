import React from 'react';

import Layout from '../components/Layout';

import pic1 from 'src/assets/images/signup-white.png';
import pic2 from 'src/assets/images/yuck.jpg';
import pic3 from 'src/assets/images/happy.jpg';
import logo from 'src/assets/images/icon-4.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          {/* <span className="icon fa-diamond"></span> */}
          <a href="https://play.google.com" target="_blank">
            <img src={logo} alt="Reserve it" />
          </a>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <img src={pic1} alt="" className="image" />
          <div className="content">
            <h2 className="major">قدم اول</h2>
            <p>اپ رو نصب میکنی و ثبت نام میکنی</p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <img src={pic2} alt="" className="image" />
          <div className="content">
            <h2 className="major">قدم دوم</h2>
            <p>یه بلک لیست به اپ میدی از غذاهای سلف که خوشت نمیاد ازشون</p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          {/* <a href="/#" className="image"> */}
          <img src={pic3} alt="" className="image" />
          {/* </a> */}
          <div className="content">
            <h2 className="major">قدم سوم</h2>
            <p>
              تمومه دیگه !!
              <br />
              ازین به بعد خیالت راحت باشه که همیشه غذات رزرو میشه برات و تا ساعت
              1 نمیخواد منتظر غذا بمونی
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      {/* <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section> */}
    </section>
  </Layout>
);

export default IndexPage;

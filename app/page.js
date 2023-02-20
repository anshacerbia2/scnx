'use client';

import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Carousel_01 from '../components/Carousel_01';
import Carousel_02 from '../components/Carousel_02';
import c_01_img_1 from '../public/images/field.jpg';
import c_01_img_2 from '../public/images/storage.jpg';
import c_01_img_3 from '../public/images/traditional-market.jpg';
import c_01_img_4 from '../public/images/supermarket.jpg';
import c_02_img_1 from '../public/images/c-02/01.jpg';
import c_02_img_2 from '../public/images/c-02/02.jpg';
import c_02_img_3 from '../public/images/c-02/03.jpg';
import c_02_img_4 from '../public/images/c-02/04.jpg';
import c_02_img_5 from '../public/images/c-02/05.jpg';
import ServicesForm from '../components/ServicesForm';
import { useState } from 'react';

export default function HomePage() {
  const [service, setService] = useState('flight');
  return (
    <>
      <Head>
        <title>The Platform - Home</title>
      </Head>
      <header style={{ height: '100vh', marginTop: -60, display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="custom-row">
            <Carousel_01
              images={[
                c_01_img_1,
                c_01_img_2,
                c_01_img_3,
                c_01_img_4
              ]}
              content={
                {
                  title: [
                    'The Platform',
                    'Partnership',
                    'Supply Chain',
                    'International Sales'
                  ],
                  tag: [
                    'Our goal is to connect farmers with markets, increasing the selling point of their crops',
                    'Cooperate with farmers to increase sales scale',
                    'Create a supply chain throughout Indonesia',
                    'Agro Platform provides a range of fresh, delectable commodity of Indonesia, obtained through sustainable agriculture practices. Our products are traceable directly to small-scale farmer, connecting them to wholesale, retail, and business partnerships, local and worldwide.'
                  ]
                }
              }
              timer={6000}
            />
            <Carousel_02
              images={[
                c_02_img_1,
                c_02_img_2,
                c_02_img_3,
                c_02_img_4,
                c_02_img_5
              ]}
            />
          </div>
        </div>
      </header>
      <section id={styles['services-box']}>
        <div className="container">
          <div className={styles['services-list']}>

          </div>
          <ServicesForm service={service} />
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';

import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import Contact from '../sections/contact'
import Landing from '../sections/landing';
import Values from 'components/values'
export default function Home({ data }) {

  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Rural Voices" />
          <Landing />
          <Banner />
          <Values />
         <ServiceSection />
          <KeyFeature />
          
          <Feature />
          <CoreFeature />
          <WorkFlow />
          
          <TeamSection />
          <TestimonialCard />
          
          <Contact/>
        </Layout>
    </ThemeProvider>
  );
}

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const protocol = req.headers['x-forwarded-proto'] || 'http'
//   const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
//   let response = await fetch(`${baseUrl}/api/fetch-users`);
//   let data = await response.json();
//   return {
//       props: {
//          data: data
//       },
//   };
// }
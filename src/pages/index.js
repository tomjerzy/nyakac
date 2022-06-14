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


import Values from 'components/values'
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Nyakach" />
          <Banner />
          <Values />
         <ServiceSection />
          <KeyFeature />
          
          <Feature />
          <CoreFeature />
          <WorkFlow />
          
          <TeamSection />
          <TestimonialCard />
          
          <Contact />
        </Layout>
    </ThemeProvider>
  );
}

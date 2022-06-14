/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'Environment Scanning',
    text:
      `We gather, organize and analyze information and in addition, survey relevant data to identify opportunities 
      and threats. The goal is to gain a clear understanding of 
      the current landscape in order to better inform 
      future decisions and achieve our long-term vision.`,
  },
  {
    id: 2,
    title: 'Strategy Formulation',
    text:
      `We build on things found to be working well and from here prioritize our objectives and formulate 
      individual strategies 
      to address each one. This is also the time we identify what internal resources and/or 
      funding we may have at our disposal, as well as what resources that may need to budget and plan for.`,
  },
  {
    id: 3,
    title: 'Strategy Implementation',
    text:
      `The most important part of implementing a strategy may be communicating it clearly to begin with. 
      The entire company should be engaged and made aware of the company’s long-term vision. Each individual 
      should understand how their role contributes to the bigger picture. Once everyone in the organization — and 
      in particular, stakeholders and owners of specific action items — are aligned, it’s time for “a little less 
      conversation, a little more action.” All the steps
      outlined during the strategy formulation process should be put into motion during strategy implementation.`,
  },
  {
    id: 4,
    title: 'Strategy Evaluation',
    text:
      `Every organization should strive for continuous improvement, and so part of the strategic 
      planning process is taking a moment to monitor and adjust as needed. By implementing checkpoints 
      into your overall plan, business leaders can identify what’s working and what’s not, and pivot 
      accordingly. Strategy evaluation involves setting and adjusting benchmarks as needed, gathering 
      feedback and measuring performance. The results of strategy evaluation can help establish best 
      practices and inform 
      future strategies.`,
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader 
        slogan="_OUR STRATEGY_"
        title=""
        isWhite={true}/>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    mb: 40,
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    // '&:nth-of-type(2n-1)::before': {
    //   backgroundImage: `url(${ArrowOdd})`,
    // },
    // '&:nth-of-type(2n)::before': {
    //   backgroundImage: `url(${ArrowEven})`,
    //   top: 17,
    // },
    // '&:last-child::before': {
    //   display: 'none',
    // },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};

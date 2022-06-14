/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Integrity And Ethics',
    title: 'Integrity And Ethics',
    text:
      `A truthful conduct on everyone's part 
      creates a strong, credible reputation of our organization, which is beneficial for everyone's interests`,
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Innovation (Not Imitation)',
    text:
    `We focus on being ahead by introducing 
    new ideas`,
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Respect',
    text:
      `We practise respect for
      rights and privacy of everyone, eliminating all kinds and forms of discrimination, whether based on religion, 
      belief, race, ethnicity, nationality, gender or physical disability.`,
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Drive',
    text:
      `The thirst to constantly improve can be achieved if one is never satisfied. 
      We try to provide a dynamic platform to our team, where they can explore their creativity and skills and further enhance themselves.`,
  },
];

export default function Feature() {
  return (
      <section sx={{ variant: 'section.feature'}}>
        <Container>
          <SectionHeader slogan="Our core values"
          title="Effectiveness without values is a tool without a purpose."/>
          <Grid sx={styles.grid}>
            {data.map((item) => (
              <FeatureCard key={item.id} src={item.imgSrc} alt={item.altText} title={item.title} text={item.text}/>
            ))}
          </Grid>
        </Container>
      </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};

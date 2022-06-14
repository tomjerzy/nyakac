/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid,Image,Text,Box, Heading } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import HelpImg from 'assets/help.jpg'
import PatternBG from 'assets/patternBG.png';
const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Volunteer',
    title: 'Volunteer',
    text:`
    Whether it’s a teaching or 
              sports project, to animals and conservation work, to a hospice or a 
              community centre, you can make a real difference!
Usually, the more local you can volunteer, or the more focused the action point, 
the better!
    `,
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Political rep',
    title: 'Write to your political representative',
    text:`Our leaders want to hear from their constituents and 
    what they’re interested in – that’s their job! However, 
    they can’t tackle poverty or climate change singlehandedly – 
    what they really want is to know what they can personally do about it.
    `,
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Online platforms',
    title: 'Use online platforms to reach others',
    text:`There’s never been a greater time in history for 
    reaching out to millions of people around the world. 
    If longer writing is more your thing, writing for an 
    online portal is a great place to 
    start. You can write blogs and original content 
    to reach new audiences.
    `,
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'giving roles',
    title: 'Giving other young people a role',
    text:`One of the best ways you can make a difference is 
    to inspire others to join you.  
    If you can create a team to join you, by giving everyone a role as 
    an ambassador and a change agent, you’re helping them to put their 
    own ideas into reality and make a much wider difference
    `,
  },
];

export default function KeyFeature() {
  return (
   <section>
    <Container my="40px">
        <SectionHeader 
        slogan="You too can"
        title="Do not feel helpless. Take an initiative now."/>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box key={item.id}>
           
              <Text as="h4" sx={{color: 'primary'}}>{item.title}</Text>
              <Text as="p">{item.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    alignItems: 'center',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ]
  },
};

/** @jsx jsx */
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Layout from 'components/layout';
import SportBG from 'assets/sport.jpg';
import PatternBG from 'assets/patternBG.png';
import SportImg from 'assets/sport.png';
import StadImg from 'assets/stad.jpg';
import Male from 'assets/male.png';
import Lady from 'assets/woman.png';
const data = [
    {
      id: 1,
      title: 'Sports is Directly Proportional to Health',
      designation: 'All work and no play makes Jack a dull boy- we all have been familiar with this proverb. Aren’t we? So don’t you think just a proper playtime can help your children stay fit and raw? From helping your child maintain good health to helping them to increase self-esteem and mental alertness, sports and games do it all',
    },
    {
      id: 2,
     
      title: 'It helps in building skills',
      designation: 'Skills like teamwork, leadership, patience, discipline, learning from failure, Sportsmanship, etc., are developed only when children play sports regularly, and these skills are equally important when it comes to studies and management',
      
    },
    {
      id: 3,
      title: 'Games make students emotionally strong.',
      designation: 'Sports teaches students to be emotionally strong. Most of the students often have to deal with some of the other emotional issues in their life, either at home or in school. The skill they develop through sports helps them to accept all defeats as well as wins.',
      
    },
    {
      id: 4,
      title: 'Sports and games enhance social relationships',
      designation: 'The students who are very much engaged in sports activities have a bonding capability. Here, they have to work as a team, which teaches them how to enhance a social relationship- which is also an important parameter of life..',
      
    },
,
  ];

export default function Sport() {
    
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO title="Nyakach" />
      <section sx={styles.workflow}>
      <Container>
        <SectionHeader 
        slogan="_Sport_"
        title="On your mark"
        isWhite={true}/>
        <hr style={{width: '20%'}}/>
      </Container>
   </section> 
   <Container my="40px">
   <Text as="h1" sx={{color: 'primary'}}>What is the importance of games?</Text>
   <Text as="p">All dreams can be fulfilled with dedication, hard work, constant practice, 
     and following a few baby steps right from school days. So, Let’s check out exactly how games and 
     sports are going to play a major role in students’ life! Studies are important for a better future, 
     but as parents, we all have to remember that our children can achieve the same goal despite having 
     an interest in games.</Text>
   </Container>
            <Grid sx={styles.grid} my="60px">
                <Image src={SportImg} sx={{borderRadius: 15}}/>
                <Box>
                <SectionHeader 
                slogan="Let us encourage them"
                title="Help them utilize their full potential"
              />
        <Text>We all know there are many famous sports 
                  persons who were indeed great scholars in studies but 
                  made their career in sports. If you see that your child is not taking
                    much interest in studies but showing interest in some other activities, there are many other 
                    fields that are always open for them. And one of them is sports. One of the best source of 
                    physical education. </Text>
                </Box>
                
            </Grid>
            <Grid sx={styles.grid} my="40px">
                
                <Box>
                <SectionHeader 
                slogan="DID YOU KNOW?"
                title="Sport can reduce crime."
              />
        <Text>Several kinds of research have shown that children who are indulged in sports 
          and physical activities are less likely to be influenced in the direction of Crime. 
          How? Being engaged in sports lessens the duration of unsupervised free time for them 
          and puts a stop to apathy. This prevents them from getting engaged in the habit of 
          smoking, consuming alcohol, and drugs. With the passing time, it’s seen that students 
          who are involved in sports are better at studies and have adapted certain things such as 
          goal setting, planning, and strategizing that play an integral role in their overall development. </Text>
                </Box>
                <Image src={StadImg} sx={{borderRadius: 15}}/>
                
            </Grid>
            <section sx={styles.flow}>
                <Container>
                  <SectionHeader 
                  slogan="_BENEFIT OF SPORT_"
                  title="So how important is sport?"
                  isWhite={true}/>
                </Container>
            </section>
            <Grid sx={styles.grid} my="40px">
              {data.map((item) => (
                <Box key={item.id}>
                  <Text as="h3">{item.title}</Text>
                  <Text>{item.designation}</Text>
                </Box>
              ))}
                
            </Grid>
      </Layout>
      </ThemeProvider>
 
  );
}

const styles = {
  workflow: {
      backgroundColor: '#000',
    backgroundImage: `url(${SportBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  flow: {
    backgroundColor: 'primary',
  backgroundImage: `url(${PatternBG})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  position: 'relative',
  py: [8, null, 9, null, null, 10],
},

  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    px: '30px',
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
    ],
  },
};

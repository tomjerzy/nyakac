/** @jsx jsx */
import { jsx,ThemeProvider,Container, Grid } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Layout from 'components/layout';
import PatternBG from 'assets/patternBG.png';
const data = [
  {
    id: 1,
    path: '/agriculture',
    altText: 'Agriculture',
    title: 'Agriculture',
    text:'To support the fight against poverty and ensure the population enjoys food security, it is vital to modernise the agriculture sector. Core tasks in this respect include promoting the private sector, enhancing the professionalism of agricultural processing businesses, and diversifying production chains.',
  },
  {
    id: 2,
    path: '/agriculture',
    altText: 'Geo Politics',
    title: 'Geo Politics',
    text:
      `Political instability is regarded by economists as a serious malaise harmful to economic performance. Political instability is likely to shorten policymakers’ horizons leading to suboptimal short term macroeconomic policies. It may also lead to a more frequent switch of
    policies, creating volatility and thus, negatively affecting macroeconomic performance.`,
  },
  {
    id: 3,
    path: '/agriculture',
    altText: 'Education',
    title: 'Education',
    text:
      'Achieving learning for all will be challenging, but it is the right agenda for the next decade. It is the knowledge and skills that children and youth acquire today—not simply their school attendance—that will drive their employability, productivity, health, and well-being in the decades to come, and that will help ensure that their communities and nations thrive',
  },
  {
    id: 4,
    path: '/agriculture',
    altText: 'Environment',
    title: 'Environment',
    text:
      'A Clean Environment Is Essential for Healthy Living: The more you don’t care about our environment, the more it will become polluted with contaminants and toxins that have a harmful impact on our health. Air pollution can cause respiratory diseases and cancer, among other problems and diseases. Water pollution can lead to typhoid, diarrheal diseases, and another one. We have taken the initiative to promote care the environment.',
  },
  {
    id: 5,
    path: '/agriculture',
    altText: 'Youth',
    title: 'Youth',
    text:
      'The youth are the future! We hear this phrase so much that it has become overused and unfortunately lost its clout. In fact, they are the future, they are the leaders of tomorrow, and they are the parents and grandparents of generations to come. But what are we doing to prepare them? With the world facing challenges now more than ever, be it education, job opportunities, environmental challenges, extremism, and terrorism, what are the tools and lessons learned we are giving them to make them stronger and know how to face whatever may come their way? How are we preparing them?',
  },
  {
    id: 6, 
    path: '/agriculture',
    altText: 'Socio-economic empowerment',
    title: 'Socio-economic empowerment',
    text:
      'Socioeconomic development is inevitable, and unexpected problems often emerge as a result. Increased population and workforce mobility means that many children are left behind and not cared for in intact families involving both parents. At the root of this phenomenon is the inequality and imbalance of global development. This is too big a problem to be resolved quickly. As a result, the trend of population migration is expected to continue. In light of this global trend, we need to have a clear picture of the current status of left-behind children from international and internal migration',
  },
  {
    id: 7, 
    altText: 'Sports',
    title: 'Sports',
    text:
      'Youth sport is a key physical activity opportunity for children and adolescents. Several factors influence youth sport participation, including social factors, but this has not to date been clearly delineated. Sport has been identified as 1 of the 7 best investments for promoting physical activity, which is particularly relevant for youth',
  },
  {
    id: 4,   
    altText: 'Co-curricular activities',
    title: 'Co-curricular activities',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO title="Nyakach" />
      <section sx={styles.workflow}>
      <Container>
        <SectionHeader 
        slogan="Key areas of focus"
        title="Humanity is facing major global challenges that are 
        transational in nature and transinstitutional in solution. 
        Below are some of the biggest issues, including how to alleviate them."
        isWhite={true}/>
        <hr style={{width: '50%'}}/>
        
      </Container>
   </section> 
   <section>
     <Container py="20px">
           <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn 
            key={item.id} 
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
            path={item.path}
            showLink={true}/>
          ))}
        </Grid>
     </Container>
   
   </section>
      </Layout>
      </ThemeProvider>
 
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
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
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

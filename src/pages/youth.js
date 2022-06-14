/** @jsx jsx */
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Layout from 'components/layout';
import PatternBG from 'assets/youthBg.jpg';
import YouthImg from 'assets/youth.jpg';
import Male from 'assets/male.png';
import Lady from 'assets/woman.png';
import shapePattern from 'assets/shape-pattern1.png';
import TextFeature from 'components/text-feature';
const data = [
    {
      id: 1,
      imgSrc: Male,
      altText: 'moses',
      title: 'Moses',
      designation: 'Mitigating pests for food production',
    },
    {
      id: 2,
      imgSrc: Lady,
      altText: 'Atieno Bright Dorine',
      title: 'Atieno B. Dorine',
      designation: 'Policy making and Analyst',
      
    },
    {
      id: 3,
      imgSrc: Lady,
      altText: 'Rose Oginga',
      title: 'Rose Oginga',
      designation: 'Education coordinator',
      
    },
,
  ];

export default function Youth() {
    
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO title="Nyakach" />
      <section sx={styles.workflow}>
      <Container>
        <SectionHeader 
        slogan=""
        title="_THE YOUTH_"
        isWhite={true}/>
      </Container>
   </section> 
   <section sx={{ variant: 'section.services'}}>
      <Container sx={styles.containerBox} mt="30px">
        <Box sx={styles.thumbnail}>
          <Image src={YouthImg} alt="Thumbnail"/>
        
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern}/>
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle="Their roles" 
          title="To Renew, Refresh and Maintain"/>
          <Text as="p">The youth are the backbone of a society and hence they 
          determine the future of any given society. This is because all other age groups, the kids, teenagers, 
          middle aged and the senior citizens rely on the youth and expect a lot from them. This makes the youth 
          to be an important age group in both today’s society and the future society than other age groups.
          Therefore, due to the high dependence on youth in the society, we the youth have a role to 
          play because the future of our families, communities and the country lies in our hands.</Text>
        </Box>
      </Container>
    </section>
      </Layout>
      </ThemeProvider>
 
  );
}

const styles = {
  workflow: {
    backgroundColor: '#000',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  memberThumb: {
    width: ['20px', '40px', '50px', null, null, '60px'],
    height: ['20px', '40px', '50px', null, null, '60px'],
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'primary',
    borderRadius: '50%',
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
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
};

/** @jsx jsx */
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Layout from 'components/layout';
import PatternBG from 'assets/patternBG.png';
import agricImg from 'assets/agri.jpg';
import Male from 'assets/male.png';
import Lady from 'assets/woman.png';
const data = [
    {
      id: 1,
      title: 'Develop high-yield crops',
      designation: `Increased research into plant breeding, which takes into account the unique soil types of 
      Africa, is a major requirement. A dollar invested in such research by the CGIAR consortium 
      of agricultural research centres is estimated to yield six dollars in benefits.`,
    },
    {
      id: 2,
      title: 'Boost irrigation',
      designation: `With the growing effects of climate change on weather patterns, more irrigation will be needed. 
      Average yields in irrigated farms are 90% higher than those of nearby rain-fed farms.`,
      
    },
    {
      id: 3,
      title: 'Increase the use of fertilizers',
      designation: `As soil fertility deteriorates, fertilizer use must increase. Governments need to ensure the 
      right type of fertilizers are available at the right price, and at the right times. Fertilizer 
      education lessens the environmental impact and an analysis of such training programs in East Africa 
      found they boosted average incomes by 61%.`,
      
    },
    {
      id: 4,
      title: 'Improve market access, regulations, and governance',
      designation: `Improving rural infrastructure such as roads is crucial to raising productivity through reductions in 
      shipping costs and the loss of perishable produce. Meanwhile, providing better incentives to farmers, 
      including reductions in food subsidies, could raise agricultural output by nearly 5%.`,
      
    },
    {
      id: 5,
      title: 'Make better use of information technology',
      designation: `Information technology can support better crop, fertilizer and pesticide selection. 
      It also improves land and water management, provides access to weather information, and 
      connects farmers to sources of credit. Simply giving farmers information about crop prices 
      in different markets has increased their bargaining power. Esoko, a provider of a mobile crop 
      information services, estimates they can boost incomes by 10-30%.`,
      
    },
    {
      id: 6,
      title: 'Adopt genetically modified (GM) crops',
      designation: `The adoption of GM crops in Africa remains limited. Resistance from overseas customers, 
      particularly in Europe, has been a hindrance. But with Africa’s rapid population growth, 
      high-yield GM crops that are resistant to weather shocks provide an opportunity for Africa 
      to address food insecurity. An analysis of more than one hundred studies found that GM crops  
      reduced pesticide use by 37%, increased yields by 22%, and farmer profits by 68%.`,
      
    },
    {
      id: 7,
      title: 'Reform land ownership with productivity and inclusiveness in mind',
      designation: `Africa has the highest area of arable uncultivated land in the world (202 million hectares) yet 
      most farms occupy less than 2 hectares. This results from poor land governance and ownership. 
      Land reform has had mixed results on the African continent but changes that clearly define property 
      rights, ensure the security of land tenure, and enable land to be used as collateral will be necessary 
      if many African nations are to realise potential productivity gains.`,
    },
    {
      id: 8,
      title: 'Step up integration into Agricultural Value Chains (AVCs)',
      designation: `Driven partly by the growth of international supermarket chains, African economies have progressively 
      diversified from traditional cash crops into fruits, vegetables, fish, and flowers. However, lack of 
      access to finance and poor infrastructure have slowed progress. Government support, crucial to coordinate 
      the integration of smallholder farmers into larger cooperatives and groups, may be needed in other areas 
      that aid integration with wider markets`
    }
    
,
  ];

export default function Agric() {
    
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO title="Nyakach" />
      <section sx={styles.workflow}>
      <Container>
        <SectionHeader 
        slogan="AGRICULTURE"
        title="Keeping people fed"
        isWhite={true}/>
        <hr style={{width: '50%'}}/>
      </Container>
   </section> 
   <section>
     <Container>
       <Grid sx={styles.grid} my="30px">
            <Box>
              <Image src={agricImg} />
            </Box>
            <Box>
              <SectionHeader 
                    slogan="Boosting food production" 
                    title="Learning how to improve production is a crucial aspect of productive farming"/>
              <Text as="p">
                Countries that have developed successfully have shifted resources from agriculture to manufacturing. 
                The Green Revolution benefited most regions of the world, particularly East Asia and the Pacific, where
                cereal yields quadrupled between 1960 and 1990. But Africa missed out on this and the continued lack of 
                  progress in agricultural productivity has been blamed for holding back the region’s 
                  overall economic growth.
              </Text>
            </Box>
       </Grid>
      
  <section sx={styles.workflow}>
        <SectionHeader 
        slogan="_POINTS OF ACTION_"
        title="So what can be done to boost  agricultural productivity? "
        isWhite={true}/>
   </section>
     
 <Grid sx={styles.grid} my="20px">
             {data.map((item) => (  
                     <Box sx={styles.grid.pBox} p="20px" key={item.id}>
                         <Text as="h2">{item.title}</Text>
                         <Text as="p">{item.designation}</Text>
                    </Box>
                
            
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
      backgroundColor: '#097969',
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
    pBox: {
      border: '1px solid #cecece', borderRadius: '10px'
    },
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
};

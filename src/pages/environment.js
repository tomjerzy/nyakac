/** @jsx jsx */
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import SectionHeader from '../components/section-header';

import Layout from 'components/layout';
import PatternBG from 'assets/patternBG.png';
import EnvBg from 'assets/envi.jpg';
import CleanPic from 'assets/cleanbg.jpg'
import ButtonGroup from 'components/button-group';
import TextFeature from 'components/text-feature';
import Carousel from 'react-multi-carousel';
const data = [
  {
    id: 1,
    title: 'Replace disposable items with reusable',
    description:
      'Anything you use and throw away can potentially spend centuries in a landfill. See below for simple adjustments you can make to decrease the amount of disposable items in your daily life..',
  },
  {
    id: 2,
    title: 'Pass on paper',
    description:
      'We are living in the Digital Era, but think about all the paper products you use in your daily life. These actions still align with reusing and repurposing, though may take a little more time for transition.',
   
  },
  {
    id: 3,
    title: 'Conserve water & electricity',
    description:
      'The tips you see below will seem like no-brainers; however, it may take to become more aware of your unconscious habits..',
    
  },
  {
    id: 4,
    title: 'Support local & environmentally friendly',
    description:
      `
      	Reduces plastic and paper waste, Boosts cost-efficiency
      ,	Enables bulk purchasing
      ,	Helps support your neighbors
      ,	Retains farmland within the community
      ,	Builds up the local economy
      ,	Uses fewer chemicals for both for growing and transporting
      `,
    
  },
  {
    id: 5,
    title: 'Recycle (& then recycle properly)',
    description:
      `Implementing recycling habits into your daily life is one of 
      the most effective ways to help lessen landfill waste, conserve natural resources, 
      save habitats, reduce pollution, 
      cut down on energy consumption, and slow down global warming.
      `,
    
  },
];
const techs = [
  {
    id: 1,
    title: 'We Use Less Energy To Do Things',
    description:
      `Since we began using electricity to power our cities, our electrical appliances have 
      slowly but surely become more and more efficient. These incremental changes in how we 
      power our day-to-day lives have a dramatic domino effect in the long run. But replacing a 
      single light bulb or 
      upgrading an outdated washing machine, we can help to offset our overconsumption of electricity.`,
  },
  {
    id: 2,
    title: 'Energy Production Is Becoming Cleaner',
    description:
      `
      Although our world is becoming more energy-dependent as life becomes digitized, 
      our ways of producing energy are becoming cleaner. Of course, there’s one major 
      reason why: renewable energy systems. As we learn to harness the power of the sun, 
      wind and water, our dependence on power sources that are exhaustible and produce pollution is 
      reduced year by year.`,
   
  },
  {
    id: 3,
    title: 'Clean Energy Systems Are More Effective',
    description:
      `
      Renewable energy production allows us to rely less on fossil fuels 
      and other types of pollutants. Technological advances in clean energy 
      systems are one of the biggest reasons why they have become a more 
      efficient and economically viable option for individuals and corporations alike. For example, 
      solar power production is now 73% cheaper than it was in 2006`,
    
  },
  {
    id: 4,
    title: 'Food Production Is Becoming More Eco-Friendly',
    description:
      `
      Our ways of farming are becoming less harmful to the environment as we 
      begin to understand how our actions affect surrounding ecosystems. 
      Farms using modern agricultural methods can produce as much as 10 times more crops from the 
      same amount of land when compared with past methods.`,
  },
  {
    id: 5,
    title: 'Recycling Is Reducing Waste And Pollution',
    description:
      `
As recycling technology develops, we can more effectively recycle and reuse more of our waste. 
In the future, humans may be able to create a 100% closed loop system by recycling the majority of 
the materials we use. This would be one of the most significant advancements for the planet as the 
lifecycle of something as simple as a water bottle can lead to resource depletion, industrial waste, 
air and water pollution, habitat erosion, animal extinction and more.`,
  },
  {
    id: 6,
    title: '  Cities Are Becoming Less Polluted',
    description:
      `
      Cities are often looked at as central hubs for pollution and energy consumption, 
      but this idea is slowly becoming less true. An entire division of technology is purely 
      dedicated to reducing pollutants from our daily activities. Toward the end of the last 
      century, this technology has helped 
      prevent an incredible amount of harm to our planet.`,
  },
  {
    id: 7,
    title: 'We Are Becoming More Aware Of Our Effect On The Planet',
    description:
      `
      With every year that passes, people become more aware of how much our existence harms 
      the planet we live on. Technology is a massive part of this equation. As people have greater 
      access to information, 
      more people can realize their impact and find ways to combat it.`,
  },
  {
    id: 7,
    title: 'We Can Share More Knowledge And Understanding',
    description:
      `
      As our ability to communicate with each other becomes ever more advanced and 
      effective through innovations like instant messaging, social media, and apps, 
      we become more knowledgeable. Basically, we are now able to crowdsource our 
      environmental understanding and can spread awareness of important issues with people beyond our 
      immediate families and friends.`,
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}
export default function Envrionment() {
    
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO title="Nyakach" />
      <section sx={styles.workflow}>
      <Container>
        <SectionHeader 
        slogan="_ENVIRONMENT_"
        title="Did you know?"
        isWhite={true}/>
        
        <Box sx={styles.card}>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}> Anything you use and throw away can potentially 
                spend centuries in a landfill. </Heading>
              
            </Box>  
        </Box>
   
      </Container>
    </section>
    <section>
      <Container my="40px">
         <SectionHeader
        slogan="Being a steward of the environment"/>
        <Text as="p">
        We only have one planet on which we live. The planet is full of resources, some renewable and some not, 
        but unfortunately, we have an ever-growing population that poses a huge threat to all these resources. 
        It is therefore unclear what future generations will find, if ever, and what life will be like for them 
        if we exploit all the current resources. To fix this issue as well as ensure we leave some resources for 
        the future, 
        environmental conservation comes in and this article will delve more into the topic.
        </Text>
     
        <Box mt="60px">
           <SectionHeader
        slogan="_DO SOMETHING_"
        title="But what can you do?"/>
        </Box>
       
        <Box sx={styles.carouselWrapper}>
          <Carousel {...carouselParams}>
            {data.map((item) => (
              <Box sx={styles.reviewCard} key={item.id}>
                <Heading as="h3" sx={styles.title}>
                  {item.title}
                </Heading>
                <Text sx={styles.description}>
                  {item.description}
                </Text>
            </Box>
          ))}
        </Carousel>
</Box>
      </Container>
    </section>
    <section sx={{variant: 'section.coreFeature'}}>
    <Container sx={styles.containerBox} my="30px">
      <Box sx={styles.contentBox}>
        <TextFeature 
          subTitle="_TECHNOLOGICAL INTERVENTION_"
          title=""
          description="Technology has profoundly shaped society, the economy and the environment. Technology has caused many environmental and social problems, but it is also  key to addressing environmental degradation, climate change, food scarcity, waste management, and other pressing global challenges. "
        />
      </Box>
      
        <Image src={EnvBg} alt="Thumbnail" sx={{borderRadius: 15}}/>
    </Container>
    <Container sx={styles.containerBox} my="30px">
    
        <Image src={CleanPic} alt="Thumbnail" sx={{borderRadius: 15}}/>
     
      <Box p="30px">
        <TextFeature 
          subTitle="_ARTIFICIAL INTELLIGENCE_"
          title=""
          description="Technologies such as artificial intelligence (AI), machine learning, 
          blockchain, IoT, geo-spatial mapping are powering the fifth industrial revolution and 
          have the potential to help us solve our climate goals. We need to harness 
          the digital revolution to drive forward environmental sustainability using a combination of high and low tech solutions. We need to use digital technology to engage and empower governments, companies and
           citizens to adopt environmentally sustainable practices, policies and business models.  "
        />
      </Box>

    </Container>
    <SectionHeader
        slogan="This is how technology comes in "
        title=""/>
   
          <Carousel {...carouselParams}>
            {techs.map((item) => (
              <Box sx={styles.reviewCard} key={item.id}>
                <Heading as="h3" sx={styles.title}>
                  {item.title}
                </Heading>
                <Text sx={styles.description}>
                  {item.description}
                </Text>
               
      </Box>
    ))}
  </Carousel>

   </section>

      </Layout>
      </ThemeProvider>
 
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },

    workflow: {
        backgroundColor: 'secondary',
        backgroundImage: `url(${PatternBG})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        py: [8, null, 9, null, null, 10],
      },

    card: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        textAlign: ['center'],
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
      reviewCard: {
        boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
        transition: 'all 0.3s',
        borderRadius: '6px',
        p: [
          '30px 20px 35px',
          '30px 25px 35px',
          '30px 20px 35px',
          '35px 30px 40px 40px',
          '30px 30px 35px',
          '35px 30px 40px 40px',
        ],
        bg: 'white',
        textAlign: 'left',
        m: [
          '28px 5px 30px 5px',
          '28px 20px 30px 20px',
          '28px 15px 30px 15px',
          '28px 15px 30px 15px',
          '30px 20px 40px',
        ],
        '&:hover': {
          boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
        },
        '.rating': {
          mb: [1, null, null, 2],
          ul: {
            pl: 0,
            listStyle: 'none',
            mb: 0,
            display: 'flex',
          },
          svg: {
            marginRight: '2px',
            '&:last-of-type': {
              marginRight: 0,
            },
          },
          '.star': {
            color: 'primary',
            mr: '1px',
          },
          '.star-o': {
            color: '#ddd',
            mr: '1px',
          },
        },
      
      },
      title: {
        fontSize: [1, 2],
        fontWeight: 700,
        mb: [3, null, null, '22px'],
        color: 'text',
        lineHeight: 1.6,
      },
      description: {
        fontSize: [1, null, null, 2],
        fontWeight: 'normal',
        color: 'text',
        lineHeight: [1.85, null, 2],
      },
      heading: {
        fontSize: [1, null, null, 2],
        fontWeight: 700,
        mb: '3px',
        color: 'text',
        lineHeight: 1.3,
      },
    
};

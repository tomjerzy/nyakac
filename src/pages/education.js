/** @jsx jsx */
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Flex, Link} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Layout from 'components/layout';
import PatternBG from 'assets/patternBG.png';
import EduImg from 'assets/book.png';
import EducImg from 'assets/educ.jpg';
import EducaImg from 'assets/edu.jpg';
import KnowImg from 'assets/know.png';
import DoImg from 'assets/do.png';
import TogetherImg from 'assets/together.png';
import BeImg from 'assets/be.png';
import MentorImg from 'assets/mentor.png'
import PupilImg from 'assets/pupil.png'
import Volunteer from 'assets/volunteer.png'
import Service from 'assets/service.png'
const data = [
    {
      id: 1,
      imgSrc: MentorImg,
      altText: 'mentor',
      title: 'Mentor a young person',
      designation: `
      
Mentoring can be an effective way of supporting a young person to grow their confidence and realise their innate potential. The Careers and Enterprise Company is a great place to look for a local mentoring programme in your area. Some of our favourites are One Million Mentors, which provides you with training and online support to become part of a national mentoring movement, or, if you’re over 50, why not become a Grandmentor and transform the life of a young person leaving care. If you’re a university student and enjoy debating, work with Debate Mate to bring debating clubs to schools and help students develop their confidence.
`,
    },
    {
      id: 2,
      imgSrc: PupilImg,
      altText: 'online',
      title: 'Tutor a pupil at your local school or online',
      designation: `
      There’s a wealth of evidence that shows children who receive tuition do better at school, particularly pupils from disadvantaged backgrounds. But private tutors are not always affordable for those who need them most. Help a bright student from a disadvantaged background improve their grades, beat the odds and get to a top university by becoming a volunteer tutor with charities like Action Tutoring, The Access Project, the Tutor Fair Foundation or Language Futures. Nesta has been supporting these charities to scale their work, including through the use of digital technology.
      `,
      
    },
    {
      id: 3,
      imgSrc: Volunteer,
      altText: 'volunteer',
      title: 'Volunteer an hour or two a week in a school',
      designation: `
      There are lots of things teachers and teaching assistants would love to be able to do but with their busy schedules simply don’t have the time. This is where you could come in and lend a hand. Volunteer with Transforming Lives for Good (TLG), a Christian charity that trains you to have a positive impact on primary aged children by building their confidence and helping tackle behavioural problems. Another great charity you can volunteer with is Beanstalk, which helps improve literacy through one-to-one reading lessons with kids in primary school who have fallen behind in their reading and struggle with self-esteem
      `,
      
    },
    {
      id: 4,
      imgSrc: Service,
      altText: 'Rose Oginga',
      title: 'Give a ‘year of service’ in a disadvantaged school',
      designation: `
      If you’re a young person who’s passionate about tackling educational inequality, why not go a step further and sign-up for a year of full-time volunteering in a school with City Year UK. City Year UK puts teams of trained volunteers directly into schools in disadvantaged communities to help pupils succeed. As well as having a huge impact on children’s lives, it’s a chance for you to develop leadership skills and invest in your own future
      `,
      
    },
  ];

  const pillars = [
    {
      id: 5, 
      src: KnowImg, 
      title: 'LEARNING TO KNOW', 
      description: `Learning to Know Implies learning how to 
    learn by developing one's Concentration, Memory skills and Ability to Think.
    Learning to Know Learning to Know involves the development of Knowledge and Skills that are needed to 
    function in the world. These skills include Literacy, Numeracy and Critical Thinking`
  },
  {
    id: 6, 
    src: DoImg, 
    title: 'LEARNING TO DO', 
    description: `Learning to Do Learning to Live Do involves the acquisition of Skills that are often linked to 
    occupational success, such as computer training, managerial training and apprenticeship`
},
{
  id: 7, 
  src: TogetherImg, 
  title: 'LEARNING TO LIVE TOGETHER', 
  description: `
  Learning to Live together Learning to live together in peace and harmony is a dynamic, holistic and lifelong process through which (the shared values) are internalized and practised. The process begins with the development of inner peace in the minds 
  and hearts of individuals engaged in the search for truth, knowledge and understanding`
},
{
  id: 8, 
  src: BeImg, 
  title: 'LEARNING TO BE', 
  description: ` 
  Learning to Be The all-round development of the whole person, to fulfill his/her highest potential, and be able to think, decide and act independently— the source of creativity, innovation and entrepreneurship. The aim of development is the complete fulfillment of man, in all the richness of his personality, the complexity of his forms of expression and his various commitments - as individual, member of a family and of 
  a community, citizen and producer, inventor of techniques and creative dreame`
}
  ]

export default function Education() {
    
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO title="Nyakach" />
      <section sx={styles.workflow}>
      <Container sx={{textAlign: 'center'}}>
        <SectionHeader 
        slogan="_EDUCATION_"
        title="Knowledge is power"
        isWhite={true}/>
        <Image src={EduImg} mt="-100px"/>
      </Container>
   </section>
   <Container p="50px">
   <SectionHeader 
        slogan="Why is Education important?"
        title="Education develops critical thinking "/>
     <Text as="p" variant="heroSecondary">
     Education is vital in children’s upbringing to get them the start in life they need for their journey towards a successful future. It is the key which unlocks the potential of the next generation of leaders, doctors, teachers and change-makers.

The catastrophic crisis in the Far East has left children unable to attend school and educational facilities. Those that have been affected have travelled to other countries to look for a better life for their families.

We strongly believe it is important to provide educational opportunities. Children will have a safe space for them to learn and have fun. We want the children to grow into adults who will one day rebuild their lives in peace.

Salam School which is based in Barja, Lebanon.  The subjects which they are taught are Arabic, English, Islamic Studies, Maths and Science. It hosts 270 children.

     </Text>
   </Container>
   <section my="40px" sx={styles.workflow}>
  
        <Text sx={{color: '#e5e4e2'}} as="h2">Four pillars of Education</Text>
     <Grid sx={styles.gridFour}>
       {pillars.map((pil) => (
         <Box key={pil.id}>
           <Image src={pil.src}/>
         <Text sx={{color: '#e5e4e2'}}>{pil.title}</Text>
         </Box> 
       ))}
     </Grid>
   </section>

   <section>
   <Container>
     <Grid sx={styles.grid} p="20px">
     {pillars.map((item) => (
         <Box>
           <Text sx={{color: 'primary'}}>{item.title}</Text>
           <Text as="p">{item.description}</Text>
         </Box>
     ))}
    </Grid>
   </Container>
   </section>
   <Container>
    <Grid sx={styles.dGrid} my="40px">
      <Image src={EducImg} sx={{borderRadius: 15}}/>
      <Box>
        <Text as="h3" sx={{color: 'primary'}}>DO SOMETHING THAT COUNTS</Text>
        <Text as="b">So what can you do to help?</Text>
        <Text as="p">Here are four practical ways you can get involved in a meaningful and effective way</Text>
      </Box>
      <Image src={EducaImg} sx={{borderRadius: 15}}/>
    </Grid>
     <Grid sx={styles.grid} p="20px">
     {data.map((item) => (
         <FeatureCardColumn src={item.imgSrc} altText={item.altText}
         title={item.title}
         text={item.designation}
        />
     ))}
    </Grid>
   </Container>
   
    </Layout>
      </ThemeProvider>
 
  );
}

const styles = {
  workflow: {
    textAlign: 'center',
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
  dGrid: {
    backgroundColor: '#e5e4e2',
    p: 20,
    borderRadius: 15,
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
      'repeat(3,1fr)',
    ],
  },
  gridFour: {
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
      'repeat(4,1fr)',
    ],
  },
};

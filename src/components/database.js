/** @jsx jsx */
import SectionHeader from 'components/section-header';
import { Text, Box, Container, jsx, Button, } from 'theme-ui';

export default function DB() {
  return (
    <section sx={styles.banner}>
        <Container sx={styles.banner.container}>
            <SectionHeader slogan="Students database" 
                    title="Keeping track of our education system"/>
                    <Text as="p">Our sub county database of tertiary level students help us keep track of our transition rate from secondary to various higher levels of learning. 
                    Students registered in our portal are better placed to benefit from available scholarships, bursary funds and well wishers.</Text>
                    <Box sx={styles.banner.contentBox}>
                      <Button variant="primary" aria-label="Register" sx={{ mr: '20px'}}>Register</Button>
                    <Button variant="secondary">View database</Button>
                    </Box>
                      
        </Container>
        
    </section>
  );
}

const styles = {
  banner: {
    pt: ['60px', '60px', '100px', '70px', null, null, '50px', '60px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      // backgroundRepeat: `no-repeat`,
      // backgroundPosition: 'bottom left',
      // backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      // backgroundImage: `url(${ShapeRight})`,
      // backgroundRepeat: `no-repeat`,
      // backgroundPosition: 'bottom right',
      // backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mt: ['30px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};

/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Image, Button,Link } from 'theme-ui';
import BannerImg from 'assets/youthBg.jpg';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
          The Power of Young People to Change the World
          </Heading>
          <Text as="p" variant="heroSecondary">
             What can I do to bring change? This is one question young people ask these days. Young people want to change the world, they are usually aware 
             of relevant issues that affect them and the world, but they wonder how to go about them.
          </Text>
          <Link href="/sections">
              <Button variant="primary">Explore</Button>
          </Link>
        
       
        </Box>
     <Box sx={styles.banner.imageBox}>
              <Image src={BannerImg} sx={{ borderRadius: 10}}/>
          </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
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
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
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
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [145, 'auto'],
      },
    },
    usGrid: {
      mt: [0, null, -6, null, -4],
      px: '10px',
      gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
      gridTemplateColumns: [
        'repeat(1,1fr)',
        null,
        'repeat(2,1fr)',
        null,
        'repeat(2,1fr)',
      ]
    },
    grid: {
      mt: '40px',
      px: '10px',
      gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
      gridTemplateColumns: [
        'repeat(1,1fr)',
        null,
        'repeat(2,1fr)',
        null,
        'repeat(3,1fr)',
      ]
    },
  },
};

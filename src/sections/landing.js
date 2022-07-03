/** @jsx jsx */
import { jsx, Container, Box, Image} from 'theme-ui';
import BannerImg from 'assets/landinglogo.png';
export default function Banner() {
  return (
    <section sx={styles.banner} id="landing">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
            <Image src={BannerImg} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    backgroundColor: '#E6E6FA',
    height: '60vh',
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    container: {
      minHeight: 'inherit',
      display: 'flex',
      textAlign: 'center',
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
      }
  }
};

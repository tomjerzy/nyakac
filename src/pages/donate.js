/** @jsx jsx */
import React, { useState } from 'react';
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading, Button} from 'theme-ui';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import LoginImg from 'assets/donate.png';

export default function Donate() {
    const [disabled, setDisabled] = useState(false)
    const login = () => {
        setDisabled(true)
        alert('STK Push not sent')
    }
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      {/* <SEO title="Nyakach" /> */}
      <section sx={styles.workflow}/>
      <Container sx={{backgroundColor: '#e5e4e2', borderRadius: 5}} py="30px">
      <Grid sx={styles.grid} mb="30px">
            <Box>
                <Image src={LoginImg}/>
            <Heading variant="heroPrimary" as="h4">
                Thank you
            </Heading>
            <Text sx={{color: 'grey'}}>
            When you help someone else, you get a positive feeling in return
                </Text>
            </Box>
            <Box>
                <Heading as="h5" mb="15px" sx={{color: 'secondary'}}>Enter donation details</Heading>
                
                <input placeholder='M-Pesa Phone number' maxLength="13" id="phone" type="number" style={styles.input}/>
                
                <input placeholder='Amount to donate' maxLength="4" type="number" style={styles.input}/>
              <Button variant="primary" mb="20px" onClick={login} disabled={disabled}>Donate</Button>
            </Box>
        </Grid>
          </Container>
      </Layout>
      </ThemeProvider>
 
  );
}

const styles = {
  workflow: {
      backgroundColor: '#fff',
    py: [7, null, 9, null, null, 7],
  },

  input: {
    backgroundColor: '#cecece',
    border: 'none',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  link: {
    fontSize: [1, '15px'],
    color: 'text',
    fontWeight: '400',
    mb: 2,
    cursor: 'pointer',
    transition: 'all 0.35s',
    display: 'block',
    textDecoration: 'none',
    lineHeight: [1.5, null, 1.8],
    px: [2, null, 4],
    ':hover': {
      color: 'primary',
    },
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

/** @jsx jsx */
import React, { useState } from 'react';
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading, Button, Link, Flex, Spinner} from 'theme-ui';
// import Router, { withRouter } from 'next/router'
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import LoginImg from 'assets/login.png';
import Router from 'next/router'
import { useEffect } from 'react';
export default function Login() {
useEffect(() => {
  const usr = localStorage.getItem('user')
  if(usr) {
    Router.push('/')
  }
},[])
    const [disabled, setDisabled] = useState(false)
    const [data, setData] = useState({
      username: '',
      password: ''
    })

    const [notice, setNotice] = useState({
      text: '',
      bg: '',
      color: '#fff'
    })

    const updateData = (e) => {
        setData({...data, 
        [e.target.name]: e.target.value})
      }

      
    const login = (event) => {
      event.preventDefault()
      setDisabled(true)
       fetch('/api/login',{
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json'
            },
          body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(data => 
        {
        localStorage.setItem('user', JSON.stringify(data))
        setNotice({...notice, 
        text: 'Login successful',
        bg: 'green',
      })
      setTimeout(() => {
        setNotice({...notice,
        text:''})
        Router.push({pathname: '/profile', query: {id: data.id}})
      }, 1000)
        }
      )
      
      
      .catch(e => {
        setDisabled(false)
        setNotice({...notice, 
          text: 'Login unsuccessful',
          bg: 'primary',
        })
        setTimeout(() => {
          setNotice({...notice,
          text:''})
        }, 3000)
      })
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
                Sign in
            </Heading>
            <Text sx={{color: 'grey'}}>
                Login to access admin controls
                </Text>
            </Box>
            <Box>
                <Heading as="h5" mb="15px">Sign with your email and password to proceed</Heading>
                <form onSubmit={login}>
                <input 
                  placeholder='Username' 
                  maxLength="30" 
                  name="username"
                  value={data.username}
                  onChange={updateData}
                  type="text" 
                  style={styles.input}/>
                <input 
                  placeholder='Password' 
                  name="password" 
                  value={data.password} 
                  onChange={updateData} 
                  maxLength="20" 
                  type="password" 
                  style={styles.input}/>
                  
                   <Button variant="secondary" mb="20px" type="submit" disabled={disabled}>
                    Sign in
            
                    </Button>
                    
           
            </form>
            {disabled && <Spinner/> }
            <Flex>
              <Link href="/" sx={styles.link}><Text>Forgot password?</Text></Link>
               <Link href="/register" sx={styles.link}><Text>Register.</Text></Link>
            </Flex>
        
            </Box>
        </Grid>
        {notice.text && 
         <Box sx={{
            width: '80%', 
            backgroundColor: notice.bg, 
            position: 'fixed', 
            bottom: 2,
            borderRadius: 5,
            padding: 3}}>
            <Text sx={{color: notice.color}}>{notice.text}</Text>
        </Box>
        }
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
    color: 'primary',
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

/** @jsx jsx */
import React, { useState, useLayoutEffect } from 'react';

import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading, Button, Link, Flex, Select} from 'theme-ui';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import LoginImg from 'assets/register.png';
import { } from 'react-icons/fa';
import Router,{useRouter} from 'next/router';
import Cookies from 'js-cookie';
export default function ChangePass() {
    const cookie = Cookies.get('auth')
    const [active, setActive] = useState(false)

    useLayoutEffect(() => {
        const dt  = JSON.parse(cookie)
        setAuth({...auth, username: dt.username})  
    },[cookie])

    const [auth, setAuth] = useState({
        username: '',
        current: '',
        new: '',
        confirm: ''
    })
    //const avatar = require(`assets/${user.avatar}`)
    
    
    const [disabled, setDisabled] = useState(false)
    const [ notice, setNotice] = useState({
        color: '#ffffff',
        text: '',
        bg: 'secondary'
    })
 

    const updateForm = (e) => {
        try {
            setAuth({...auth,
            [e.target.name]: e.target.value
            }
            )
        } catch(err) {
            console.log(err)
        }
    }

    const submitData = async (event) => {
        event.preventDefault()
        try {
            if(auth.new !== auth.confirm) {
                setNotice({
                    text: 'Passwords do not match',
                    bg: 'primary',
                    color: '#fff'
                })
                setTimeout(() => {
                    setNotice({...notice, text: ''})
                }, 3000)
            } else if (auth.current == auth.confirm) {
                setNotice({
                    text: 'Current password is the same as the new password',
                    bg: 'orange',
                    color: '#fff'
                })
                setTimeout(() => {
                    setNotice({...notice, text: ''})
                }, 3000)
            } else {
               const data = await fetch('/api/change-password',{
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify(auth)
                })
            
                if(data.status === 200) {
                    setNotice({...notice, 
                        text: 'Password changed successfully',
                        bg: 'green',
                    })
                    setTimeout(() => {
                        setNotice({...notice, text: data.message})
                        Router.push({pathname: '/profile', query:{username: auth.username}})
                    }, 1000)
                } else if (data.status=== 400) {
                    setNotice({...notice, 
                        text: "Could not verify credentials",
                        bg: 'primary',
                    })
                    setTimeout(() => {
                        setNotice({...notice, text: ''})
                        
                    }, 1000)
                }
            }
           
            
        } catch(e){
            setDisabled(false)
            setNotice({...notice, 
                text: e.error,
                bg: 'primary',
        })
        setTimeout(() => {
            setNotice({...notice,
            text:''})
          }, 3000)
        }
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
                Change password
            </Heading>
            </Box>
            <Box>
                <Heading as="h5" mb="15px">Change your password</Heading>
                {auth.username ? 
                <form onSubmit={submitData}> 
                    <input 
                        placeholder='Enter current password' 
                        value={auth.current} 
                        maxLength="30"
                        type={active ? 'text' : 'password'}
                        name="current"
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input 
                        placeholder='Enter new password' 
                        value={auth.new} 
                        name="new" 
                        maxLength="30" 
                        type={active ? 'text' : 'password'}
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input 
                        placeholder='Confirm new password' 
                        name="confirm" 
                        value={auth.confirm} 
                        maxLength="30" 
                        type={active ? 'text' : 'password'}
                        style={styles.input}
                        onChange={updateForm}/>
                

            <Button variant="secondary" mb="20px" type="submit" disabled={disabled}>Change password</Button>
    </form> : <Text>Loading data...</Text>}
                
        
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
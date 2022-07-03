/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading, Button, Link, Flex, Select} from 'theme-ui';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import LoginImg from 'assets/register.png';
import { } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import * as cookie from 'cookie'
export default function EditProfile({ usr, baseUrl }) {

  const [ user, setUser] = useState(usr)
    const router = useRouter()
    const [active, setActive] = useState(true)
    const [disabled, setDisabled] = useState(false)
    const [ notice, setNotice] = useState({
        color: '#ffffff',
        text: '',
        bg: 'secondary'
    })

    const updateForm = (e) => {
        try {
            setUser({...user,
            [e.target.name]: e.target.value
            }
            )
        } catch(err) {
            
        }
    }

    const submitData = async (event) => {
        event.preventDefault()
        try {
            const resp = await fetch(`${baseUrl}/api/update-user`,{
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(user)
            })

            if(resp.status === 200){
              Cookies.remove('auth');
              setNotice({...notice, 
                  text: 'Update successful. Please login again to access content',
                  bg: 'green',
              })
              router.push({pathname: '/user/login'}) 
            }
         
        } catch(e){
          console.log(e)
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
                Edit profile
            </Heading>
            </Box>
            <Box>
                <Heading as="h5" mb="15px">Update your profile</Heading>
                {user.id ? 
                <form onSubmit={submitData}> 
                    <input 
                        placeholder='First name' 
                        value={user.f_name} 
                        maxLength="30"
                        type="text"
                        name="f_name"
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input 
                        placeholder='Last name' 
                        value={user.l_name} 
                        name="l_name" 
                        maxLength="20" 
                        type="text" 
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input 
                        placeholder='Username' 
                        name="username" 
                        value={user.username} 
                        maxLength="30" 
                        type="text" 
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input 
                        placeholder='Email address' 
                        name="email" 
                        value={user.email} 
                        maxLength="50" 
                        type="email" 
                        style={styles.input}
                        onChange={updateForm}/> 
                
                <input 
                    placeholder='Phone number' 
                    name="phone" 
                    value={user.phone} 
                    maxLength="12"
                    type="number" 
                    style={styles.input}
                    onChange={updateForm}/>
                
                    <input 
                        placeholder='Facebook profile' 
                        value={user.fb} 
                        type="text"
                        style={styles.input}
                        name="fb"
                        onChange={updateForm}/>
                    <input 
                        placeholder='Twitter profile' 
                        value={user.twitter} 
                        type="text"
                        style={styles.input}
                        name="twitter"
                        onChange={updateForm}/>
                    
                    <input 
                        placeholder='Instagram profile' 
                        value={user.ig} 
                        type="text"
                        style={styles.input}
                        name="ig"
                        onChange={updateForm}/>
            <Button variant="secondary" mb="20px" type="submit" disabled={disabled}>Update profile</Button>
    </form> : <Text>User not found</Text>}
                
        
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


// export async function getServerSideProps(context) {
//     const { query, req } = context;
//     const { origin } = absoluteUrl(req);
  
//     const referer = req.headers.referer || '';
//     const baseApiUrl = `${origin}/api`;
//     const userApi = await fetch(`${baseApiUrl}/${query.username}`)
//     const currentUser = await userApi.json();
//     return {
//       props: {
//         currentUser
//       },
//     };
//   }

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

export async function getServerSideProps(context) {
  const { query, req } = context;
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const cook =  cookie.parse(req.headers.cookie)
  const auth  = JSON.parse(cook.auth)
  let response = await fetch(`${baseUrl}/api/${auth.username}`);
  let data = await response.json();
  return {
      props: {
          baseUrl: baseUrl,
          usr: data,
      },
  };
}
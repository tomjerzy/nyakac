/** @jsx jsx */
import React, { useState } from 'react';
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading, Button, Link, Flex, Select} from 'theme-ui';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import LoginImg from 'assets/register.png';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import { useRouter } from 'next/router';
export default function Register() {
    const router = useRouter()
    const [disabled, setDisabled] = useState(false)
    const [ notice, setNotice] = useState({
        color: '#ffffff',
        text: '',
        bg: 'secondary'
    })
    const [active, setActive] = useState(true)
    const [user, setUser] = useState({
        f_name: '',
        l_name: '',
        avatar: '',
        username: '',
        email: '',
        gender: 'male',
        phone: '',
        ig: '',
        fb: '',
        twitter: '',
        password: '',
        verified: false
    })

    const updateForm = (e) => {
        try {
            setUser({...user,
            [e.target.name]: e.target.value
            }
            )
        } catch(err) {
            console.log(err)
        }
    }

    const submitData = (event) => {
        event.preventDefault()
            fetch('/api/register',{
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(user)
            })
            .then( data =>  {
                setNotice({...notice, 
                text: 'Registration successful',
                bg: 'secondary',
            })
            router.push('/login')
            })
            .catch(e => {
                setDisabled(false)
                setNotice({...notice, 
                    text: 'Registration failed',
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
                Create account
            </Heading>
            <Text sx={{color: 'grey'}}>
                Be a verified member
                </Text>
            </Box>
            <Box>
                <Heading as="h5" mb="15px">Create an account as a verified member</Heading>
                <form onSubmit={submitData}>
                <Select ml="3"
                    name="gender" 
                    value={user.gender} onChange={updateForm}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Select>
                
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
                <Flex sx={{alignItems: 'center'}}>
                    <input 
                        placeholder='Password' 
                        value={user.password} 
                        maxLength="50" 
                        type= {active ? 'password' : 'text' }
                        style={styles.input}
                        name="password"
                        onChange={updateForm}/>
                    <Text onClick={() => setActive(!active)} sx={{ fontSize: 30, cursor: 'pointer', color: 'primary'}}>
                        {active ? <FaEye /> : <FaEyeSlash />}</Text>
                </Flex>
               
            <Button variant="secondary" mb="20px" type="submit" disabled={disabled}>Register</Button>
    </form>
                   
            
        <Link href="/login" sx={styles.link}><Text>Already have an account? Login</Text></Link>
        
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

/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading, Button, Link, Flex, Select} from 'theme-ui';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import LoginImg from 'assets/register.png';
import { } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { absoluteUrl } from '../../middleware/utils';
import Router, { useRouter } from 'next/router';
export default function AddInfo(props) {
    const [active, setActive] = useState(false)
    const {about} = props

    const [dta, setDta] = useState(about)
    useEffect(() => {
      const rawAuth = Cookies.get('auth')
      if(rawAuth) {
          const jsonAuth = JSON.parse(rawAuth)
          setDta({...dta, userId: jsonAuth.id })
      }
    },[props])

    
    //const avatar = require(`assets/${user.avatar}`)
    
    
    const [disabled, setDisabled] = useState(false)
    const [ notice, setNotice] = useState({
        color: '#ffffff',
        text: '',
        bg: 'secondary'
    })
 

    const updateForm = (e) => {
        try {
            setDta({...dta,
            [e.target.name]: e.target.value
            }
            )
        } catch(err) {
            console.log(err)
        }
    }

    const submitData = (event) => {
        event.preventDefault()
        try {
            fetch('/api/edit-about',{
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify(dta)
            })
            .then( data =>  {
                setNotice({...notice, 
                    text: 'Update successful',
                    bg: 'secondary',
                })
                setTimeout(() => {
                    setNotice({...notice, text: ''})
                   
                    // Router.push(`/add-bio?id=${dta.userId}`);
                    Router.push({pathname: '/add-bio', query: {id: dta.userId}})
                }, 3000)
            })
               
        } catch(e){
            setDisabled(false)
            setNotice({...notice, 
                text: 'Update failed',
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
                About you
            </Heading>
            <Text>Tell us who you are and your position in the organization</Text>
            </Box>
            <Box>
                <Heading as="h5" mb="15px">Add info</Heading>
                <form onSubmit={submitData}> 
                <textarea rows="2" required
                        placeholder='Position in the organization' 
                        value={dta.title} 
                        type='text'
                        name="title"
                        style={styles.input}
                        onChange={updateForm}/> 
                    <textarea rows="5" minLength={5}
                        placeholder='Your role' required
                        value={dta.roles} 
                        type='text'
                        name="roles"
                        style={styles.input}
                        onChange={updateForm}/> 
                    <textarea minLength={10} required
                        rows="5"
                        placeholder='Education' 
                        value={dta.education} 
                        name="education" 
                        type='text'
                        style={styles.input}
                        onChange={updateForm}/> 
                    <textarea
                        placeholder='About yourself' 
                        name="about" 
                        value={dta.about} required
                        type='text'
                        rows="5"
                        style={styles.input}
                        onChange={updateForm}/>
            <Button variant="secondary" mb="20px" type="submit" disabled={disabled}>Update info</Button>
    </form>
                
        
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

export async function getServerSideProps(context) {
  const { query, req } = context;
  const { nextPage } = query;
  const { origin } = absoluteUrl(req);
  const referer = req.headers.referer || '';
  const nextPageUrl = !isNaN(nextPage) ? `?nextPage=${nextPage}` : '';
  const baseApiUrl = `${origin}/api`;
  const userApi = await fetch(`${baseApiUrl}/get-about/${query.id}`)
  const about = await userApi.json();
  return {
    props: {
      about
    },
  };
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
/** @jsx jsx */
import React, { useState, useEffect } from 'react';

import { jsx,ThemeProvider,Container,Text, Box, Grid,Image, Heading, Button, Link, Flex, Select} from 'theme-ui';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import LoginImg from 'assets/register.png';
import { } from 'react-icons/fa';
import router from 'next/router';

export default function AddBio() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const dt  = JSON.parse(localStorage.getItem('user'))
        setDta({...dta, id: dt.id})  
    },[])

    const [dta, setDta] = useState({
        id: '',
        district: '',
        location: '',
        sublocation: '',
        ward: '',
        profession: '',
        achievements:'',

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
            fetch('/api/add-info',{
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
                    router.push({pathname: '/profile', query: {id: dta.id}})
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
            <Heading variant="heroPrimary" as="h4">
                Additional information
            </Heading>
            <Text>Let us know you more</Text>
            </Box>
            <Box>
                {dta.id ? 
                <form onSubmit={submitData}> 
                <input
                        placeholder='District of residence' 
                        value={dta.district} 
                        type='text'
                        name="district"
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input
                        placeholder='Location' 
                        value={dta.location} 
                        type='text'
                        name="location"
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input
                        placeholder='Sub-Location' 
                        value={dta.sublocation} 
                        type='text'
                        name="sublocation"
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input
                        placeholder='Ward' 
                        value={dta.ward} 
                        name="ward" 
                        type='text'
                        style={styles.input}
                        onChange={updateForm}/> 
                    <input
                        placeholder='Your profession' 
                        name="profession" 
                        value={dta.profession}
                        type='text'
                        style={styles.input}
                        onChange={updateForm}/>
                    <textarea rows="5"
                        placeholder='Your achievements' 
                        name="achievements" 
                        value={dta.achievements}
                        type='text'
                        style={styles.input}
                        onChange={updateForm}/>
            <Button variant="secondary" mb="20px" type="submit" disabled={disabled}>Add info</Button>
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

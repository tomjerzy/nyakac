/** @jsx jsx */
import React, { useState } from 'react';
import { Heading, Image, Box, Link, Container, jsx,Grid,Input,Button,IconButton,Flex, Text} from 'theme-ui';
import { FaPhoneAlt,FaMailBulk,FaMapPin } from 'react-icons/fa';
import Phone from 'assets/icons/phone.png'
import Mail from 'assets/icons/mail.png'
import Whatsapp from 'assets/icons/whatsapp.png'
import Pin from 'assets/icons/pin.png'
export default function TeamCard({ src, altText, title, designation, social }) {
  const [disabled, setDisabled] = useState(false)
  const [notice, setNotice] = useState({
    text: '',
    bg: '',
    color: '#fff'
  })

  const [dta, setDta] = useState({
    f_name: '',
    l_name: '',
    email: '',
    messages: ''
  })
  const items = [
    { path: 'mailto:info@rural-voices.org',text: 'info@rural-voices.org', icon: Mail},
    { path: 'tel:+254740450967',text:'+254740450967', icon: Phone},
    { path: 'tel:+254739105140',text:'+254739105140', icon: Whatsapp},
    { path: 'www.maps.google.com', text: 'Nyakach sub county', icon: Pin}
    
  ]

  const updateData = (e) => {
    setDta({...dta,
    [e.target.name]: e.target.value})
  }

  const sendComment = async () => {
    try {
      setDisabled(true)
     const r = await fetch('/api/enquiry', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dta)
      })
      setDta({...dta,
        f_name: '',
        l_name: '',
        email: '',
        messages: ''
      })
     setNotice({...notice,
        text: 'Submitted successfully',
        bg: 'green'})
        setTimeout(() => {
          setNotice({...notice,
          text:''})
        }, 3000)
    } catch(e) {
      setNotice({...notice,
        text: 'Error sending data.',
        bg: 'primary'})
      setDisabled(false)
      setTimeout(() => {
        setNotice({...notice,
        text:''})
      }, 3000)
    }
  }
  return (
    <section id="contact">
      <Container sx={{backgroundColor: '#e5e4e2', borderRadius: 5}} py="30px">
                    <Grid sx={styles.grid} mb="30px">
                      <Box>
                      <Heading variant="heroPrimary" as="h4">
                        Contact Us
                      </Heading>
                      <Text sx={{color: 'grey'}}>Need to get in touch? Either fill the form or use below contact details to reach us</Text>
                        {items.map((item) => (
                          <Flex key={item.path} m={2}>
                              <Image src={item.icon} sx={{height: '35px'}} />
                              <Link href={item.path} sx={styles.link}>
                              <Heading>{item.text}</Heading>  
                            </Link>
                          </Flex>
                        ))}
                   
                      </Box>
                      <Box>
                          <Flex>
                            <input  required
                              placeholder='First name' 
                              name="f_name" 
                              maxLength={20} 
                              style={styles.input} 
                              value={dta.f_name} 
                              onChange={updateData}/>
                            <input placeholder='Last name' required maxLength={20} style={styles.input}
                            value={dta.l_name}
                            name="l_name" 
                            onChange={updateData}/>
                          </Flex>
                        <Box>
                          <input placeholder='Email address' required type="email" maxLength={20} style={styles.input}
                          value={dta.email}
                          name="email" 
                          onChange={updateData}/>
                        </Box>
                        <Box>
                         <textarea placeholder='What can we help with?' required
                         value={dta.messages}
                         name="messages" 
                         onChange={updateData} maxLength={200} rows="4" cols="50" style={styles.input}/> 
                        </Box>
                        
                        <Button variant="secondary" onClick={sendComment} disabled={disabled}>Send</Button>
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
    </section>
  );
}

const styles = {
  input: {
    backgroundColor: '#E6E6FA',
    border: 'none',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ]
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
};

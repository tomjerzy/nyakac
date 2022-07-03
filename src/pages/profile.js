/** @jsx jsx */
import { jsx,ThemeProvider,Container,Text, Box, Grid, Heading, Button, Image, Link, Flex} from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { FaPhoneAlt,FaMailBulk,FaUserAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
const axios = require('axios')
// import SEO from 'components/seo';
import {useRouter} from 'next/router'
import Cookies from 'js-cookie';
import * as cookie from 'cookie';
export default function Profile({ user, baseUrl, auth }) {
  const router = useRouter()
  const [alert, setAlert] = useState(false)
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [fileDataURL, setFileDataURL] = useState(null)
  const [notice, setNotice] = useState({
    text: '',
    bg: '',
    color: '#fff'
  })
  
  const deleteUser = async () => {
    try {
        setAlert(false)
          await fetch(`${baseUrl}/api/delete-account`, {
              method: 'POST',
              body: auth.id
            })
            //Cookies.remove('auth')
           // router.push('/')
    } catch(e) {
      console.log(e)
    }
    
  }

  const updateMessage = (e) => {
    setMessage({...message, 
    [e.target.name]: e.target.value})
  }

  const [message, setMessage] = useState({
    receiver: user.id,
    f_name: '',
    contact: '',
    messages: ''
  })
    const handleClick = () => {
      inputRef.current.click()
    }
    const handleFileChange = event => {
      const file = event.target.files[0]
      setFile(file)
    }

    useEffect(() => {
      let fileReader, isCancel = false;
      if(file) {
        fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if(result && !isCancel) {
            setFileDataURL(result)
          }
        }
        fileReader.readAsDataURL(file)
      }
      return () => {
        isCancel = true;
        if(fileReader && fileReader.readyState === 1) {
          fileReader.abort()
        }
      }
    },[file])


    const uploadFile = async () => {
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (event) => {
          // console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
        },
      };
      const formData = new FormData()
      formData.append('file', file)
      formData.append('id', auth.id)
      try {
        await axios.post('/api/upload-avatar', formData, config);
        setNotice({...notice, 
        text: 'Avatar changed successfully',
        bg: 'green',
        color: '#fff'})
        setTimeout(() => {
          setNotice({...notice, text: ''})
          setFile(null)
        }, 2000)
        Cookies.remove('auth')
        router.push('/user/login')
      } catch (e) {
        setNotice({...notice, 
          text: 'Failed to upload file',
          bg: 'primary',
          color: '#fff'})
          setTimeout(() => {
            setNotice({...notice, text: ''})
          }, 2000)
      }
     
    }
 
  

  const sendMessage = (e) => {
    e.preventDefault()
      fetch(`${baseUrl}/send-message`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      }).then(() => {
        setMessage({...message, 
        f_name: '',
        contact: '',
        messages: ''
      })
        setNotice({...notice, 
          text: 'Message sent successfully',
          bg: 'green',
          color: '#fff'})
          setTimeout(() => {
            setNotice({...notice, text: ''})
          }, 2000)
      })
      .catch(err => {
        setNotice({...notice, 
          text: 'Error sending message',
          bg: 'primary',
          color: '#fff'})
          setTimeout(() => {
            setNotice({...notice, text: ''})
          }, 2000)
      })
  }
 
  //const avatar = require(`assets/${auth.avatar}`)
  
   return (
    <ThemeProvider theme={theme}>
      <Layout>
      {/* <SEO title="Nyakach" /> */}
      <section sx={styles.workflow}/>

      {user.id ? 
      <Container>
            <Grid sx={styles.grid}>
                <Box sx={{textAlign: 'center', p: 2, display: 'flex', flexDirection: 'column'}}>
                  <Image src={fileDataURL ? fileDataURL: user.avatar} sx={styles.image} />
                  <input type="file" style={{ display: 'none'}} 
                  name="file" accept="image/*" ref={inputRef} onChange={handleFileChange} />

                 {user.id == auth.id &&
                 <Button onClick={handleClick} my={3}>Edit avatar</Button>
                 }
                      
              
                 {file &&
                      <Flex my={2} sx={{width: '100%', justifyContent: 'space-between'}}>
                        <Button onClick={() => {
                          setFile(null),
                        setFileDataURL(null)}} my={3} variant="primary">Cancel</Button>
                        <Button onClick={uploadFile} variant="secondary" my={3}>Upload</Button>
                  </Flex>
}
                </Box>
                <Box>
                <Heading as="h1" sx={styles.title} my={2}>
                  {user.f_name} {user.l_name}
                </Heading>
                
                <Flex>
                  <FaMailBulk/>
                  <Text ml="5px">{user.email}</Text>
                </Flex>
                <Flex>
                  <FaUserAlt/>
                  <Text ml="5px">{user.username}</Text>
                </Flex>
                {user.phone && (

                   <Flex>
                  <FaPhoneAlt/>
                  <Text ml="5px">0{user.phone}</Text>
                </Flex>
                )}
               
                
                  <Flex color="primary" p={2} m={3}>
                    <Link m={2} href={user.fb}>
                    <FaFacebook />
                    </Link>
                    <Link m={2} href={user.twitter}>
                    <FaTwitter />
                    </Link>
                    <Link m={2}  href={user.ig}>
                    <FaInstagram />
                    </Link>
                    
                  </Flex>
                 
                </Box>
              </Grid>
            <Grid sx={styles.grid}>
              <section sx={{  boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'], p: 2}}> 
               
              <div>
                    <Box my={3}>
                  <Heading>
                    ABOUT
                  </Heading>
                  <Text>{user.about}</Text>
                </Box>

                <Box>
                  <Heading>
                    ROLE
                  </Heading>
                  <Text>{user.roles}</Text>
                </Box>
                <Box my={2}>
                  <Heading>
                    EDUCATION
                  </Heading>
                  <Text>{user.education}</Text>
                </Box>
              </div>
            
                
                
                <Box my={2}>
                  <Heading>
                    PROFESSION
                  </Heading>
                  <Text>{user.profession}</Text>
                </Box>
                
              </section>
              
              <Box mb={3}>
               
                <div>
                  <Heading as="h2">Location details</Heading>
                  <Box>
                  <Text>Comes from {user.district} district, {user.origin} location, {user.sublocation} sub-location and {user.ward} ward.</Text>
                  </Box>
                <Box>
                  <Heading as="h2">Achievements</Heading>
                  <Text>{user.achievements}</Text>
                </Box>
                
                </div>
                
                {auth.id !== user.id &&
                <Box>
                  <hr/>
                   <Heading>Leave a message to {user.f_name}</Heading>
                <form onSubmit={sendMessage}>
                  <input placeholder='Your name' sx={styles.input} name="f_name" value={message.f_name} 
                  onChange={updateMessage}/>
                  <input placeholder='Phone or email address' sx={styles.input} name="contact"  
                  value={message.contact}
                  onChange={updateMessage}/>
                  <textarea rows="5" placeholder='Your message'  sx={styles.input} name="messages" 
                  value={message.messages}
                  onChange={updateMessage}/>
                  <Button type="submit" variant="primary">Submit</Button>
                </form>
                </Box>
      }
              </Box>
            </Grid>
            {auth.id == user.id &&
            <section>
                <Grid sx={styles.grid}>
                <Box sx={styles.card}>
                  <Heading as="h2">Account</Heading>
                  <Link sx={styles.link} href={`/edit-profile?username=${auth.username}`}>Edit profile</Link>
                  <Link sx={styles.link} href="/add-bio">Edit info</Link>
                  <Link sx={styles.link} href="/add-about">Edit about</Link>
                  <Link sx={styles.link} href="/change-password">Change password</Link>
                  <Link sx={styles.link} onClick={() => setAlert(true)}>Delete account</Link>
                </Box>

                <Box sx={styles.card}>
                  <Heading as="h2">Useful links</Heading>
                  <Link sx={styles.link}>View team members</Link>
                  <Link sx={styles.link}>Enquiries</Link>
                  <Link sx={styles.link}>Create article</Link>
                  <Link sx={styles.link}>My messages</Link>
                  <Link sx={styles.link}>Share donation link</Link>
                </Box>
                </Grid>
                
              </section>
}
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

        {alert &&
        <Box sx={{
       height: '100%',
        width: '100%',
        backdropFilter: blur('5px'),
        backgroundColor: '#000', 
        textAlign: 'center', 
        justifyContent: 'center',
        background: 'rgba(0,0,0, 0.5)',
        position: 'fixed', top: 0, left: 0
        }}>
          <Box p={3} mx='auto' my='25%' sx={{zIndex: 100,
             borderRadius: '5px', backgroundColor: '#fff'}}>

            <Text sx={{color: 'primary', fontSize: '20px', position: 'relative', bottom: 20}}>Delete account?</Text>
            <Text>All your data will be deleted.</Text>
            <Flex sx={{justifyContent: 'space-around'}}>
              <Button onClick={() => setAlert(false)} className="donate_btn" variant="secondary">Cancel</Button>
              <Button onClick={() => deleteUser()}>Delete</Button>
            </Flex>
          </Box>

        </Box>}
          </Container>
          : <Container>
              <Box><Text sx={{color: 'primary'}}>{user.error}</Text></Box>
            </Container>}
      </Layout>
      </ThemeProvider>
 
  );
 
 
}

const styles = {
 
  title: {
    fontSize: '40px',
    color: 'primary'
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: '50%',
    alignSelf: 'center'
  },
  workflow: {
      backgroundColor: '#fff',
    py: [7, null, 9, null, null, 7],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary',
      },
      '.info__designation': {
        color: 'primary',
      },
      '.social__share': {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1],
        },
      },
    },
  },
  link: {
    fontSize: [1, '15px'],
    color: 'secondary',
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
  input: {
    backgroundColor: '#cecece',
    border: 'none',
    width: '100%',
    padding: 2,
    borderRadius: 3,
    margin: 1,
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    my: '20px',
    px: '10px',
    boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
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
  var auth = {}
  const { query, req } = context;
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const cook =  req.headers.cookie
  if(cook) {
      const cooked =  cookie.parse(req.headers.cookie)
      auth  = JSON.parse(cooked.auth)
  } 
  let response = await fetch(`${baseUrl}/api/${query.username}`);
  let data = await response.json();
  return {
      props: {
         auth: auth,
         baseUrl: baseUrl,
        user: data,
      },
  };
}
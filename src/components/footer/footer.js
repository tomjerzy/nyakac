/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import { useEffect, useState } from 'react';
import router from 'next/router';

export default function Footer() {
  const [auth, setAuth] = useState(null)
  const [notice, setNotice] = useState({
    text: '',
    color: '#fff',
    bg: 'orange'
  })
  useEffect(() => {
    const usr = localStorage.getItem('user')
    if(usr) {
    setAuth(JSON.parse(usr))
    }
    
  },[])

  const logUser = () => {
    if(auth) {
      localStorage.clear()
      setNotice({...notice, 
        text: 'You have been logged out'})
        setTimeout(() => {
          router.push('/login')
        }, 2000)
    } else {
      router.push('./login')
    }
  }
  
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={FooterLogo} alt="Logo"/>
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link 
                path={item.path} 
                key={i}
                label={item.label}
                sx={styles.footer.link}>

                </Link>
              ))}
              <Link label={auth ? 'Logout' : 'Login'} sx={styles.footer.link} onClick={logUser}/>
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} Youth for Change
          </Text>
        </Box>
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

    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
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
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};

/** @jsx jsx */
import { jsx, Container, Flex, Button, Image } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import {useRouter} from 'next/router';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.png';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
//import Cookies from 'js-cookie'

export default function Header({ className }) {
  const [auth, setAuth] = useState(null)
 const router = useRouter()

  useEffect(() => {
    const cook = localStorage.getItem('auth')
    if(cook) {
      const passed = JSON.parse(cook)
    setAuth(passed)
    }
  },[])

  return (
    <header sx={styles.header} className={className}>
      <Container sx={styles.container}>
        <Logo src={LogoDark}/>
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
            activeClass='active'
            to={menuItem.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={i}
            >
              {menuItem.label}
            </Link>
          ))}
          
        </Flex>
        {auth &&
          <Flex>
           <Link sx={{cursor: 'pointer'}} onClick={() => router.push({pathname: '/profile', query:{username: auth.username}})}>
            <Image src={auth.avatar} sx={styles.image}/>
            </Link> 
            <Link  sx={{cursor: 'pointer'}} onClick={() => alert('No notifications')} to={'/'}>
              <FaBell size={25}/>
            </Link>
          </Flex>
        }
        {/* <Link href="/donate">
          <Button className="donate_btn" variant="secondary" aria-label="Donate">
          Donate
        </Button>
        </Link> */}
        
        <MobileDrawer/>
      </Container>
    
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  image: {
    width: 30,
    height: 30,
    mx: 2,
    borderRadius: '50%'
  },
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};

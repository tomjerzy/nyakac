import React, { useState, useLayoutEffect } from 'react';
import {ThemeProvider, Box,Container,Image,Grid,Heading, Text, Flex, Link} from 'theme-ui'
import Router, { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import theme from 'theme';
import Layout from 'components/layout';
import LoginImg from 'assets/login.png';
const cookie = Cookies.get('auth')
/* utils */
import { absoluteUrl } from '../../../middleware/utils';

/* components */

import FormLogin from '../../components/forms/LoginForm';
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* login schemas */
const FORM_DATA_LOGIN = {
  email: {
    value: '',
    label: 'Email',
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: emailRegEx,
      error: 'Please insert valid email',
    },
  },
  password: {
    value: '',
    label: 'Password',
    min: 6,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid password',
    },
  },
};

export default function Login(props) {
  useLayoutEffect(() => {
    if(cookie) {
      Router.push('/')
    }
},[])
const {query} = props
  const [loading, setLoading] = useState(false);

  const [stateFormData, setStateFormData] = useState(FORM_DATA_LOGIN);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormValid, setStateFormValid] = useState(false);
  const [stateFormMessage, setStateFormMessage] = useState({});

  function onChangeHandler(e) {
    const { name, value } = e.currentTarget;

    setStateFormData({
      ...stateFormData,
      [name]: {
        ...stateFormData[name],
        value,
      },
    });

    /* validation handler */
    //validationHandler(stateFormData, e);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();

    let data = { ...stateFormData };

    /* email */
    data = { ...data, email: data.email.value || '' };
    /* password */
    data = { ...data, password: data.password.value || '' };

    /* validation handler */
    const isValid = validationHandler(stateFormData);

    if (isValid) {}
      // Call an external API endpoint to get posts.
      // You can use any data fetching library
      setLoading(!loading);
      const loginApi = await fetch('/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      let result = await loginApi.json();
      setStateFormError(result)
      if (result.success && result.token) {
        //Cookies.set('token', result.token);
        Cookies.set('auth', JSON.stringify(result.auth));
        // window.location.href = referer ? referer : "/";
        // const pathUrl = referer ? referer.lastIndexOf("/") : "/";
        Router.push({pathname: '/profile', query: {username: result.auth.username}});
      } else {
        setStateFormMessage(result);
      }
      setLoading(false);
    
  }

  function validationHandler(states, e) {
    const input = (e && e.target.name) || '';
    const errors = [];
    let isValid = true;

    if (input) {
      if (states[input].required) {
        if (!states[input].value) {
          errors[input] = {
            hint: `${states[e.target.name].label} required`,
            isInvalid: true,
          };
          isValid = false;
        }
      }
      if (
        states[input].value &&
        states[input].min > states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} min ${states[input].min}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].value &&
        states[input].max < states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} max ${states[input].max}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].validator !== null &&
        typeof states[input].validator === 'object'
      ) {
        if (
          states[input].value &&
          !states[input].validator.regEx.test(states[input].value)
        ) {
          errors[input] = {
            hint: states[input].validator.error,
            isInvalid: true,
          };
          isValid = false;
        }
      }
    } else {
      Object.entries(states).forEach(item => {
        item.forEach(field => {
          errors[item[0]] = '';
          if (field.required) {
            if (!field.value) {
              errors[item[0]] = {
                hint: `${field.label} required`,
                isInvalid: true,
              };
              isValid = false;
            }
          }
          if (field.value && field.min >= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} min ${field.min}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.value && field.max <= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} max ${field.max}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.validator !== null && typeof field.validator === 'object') {
            if (field.value && !field.validator.regEx.test(field.value)) {
              errors[item[0]] = {
                hint: field.validator.error,
                isInvalid: true,
              };
              isValid = false;
            }
          }
        });
      });
    }
    if (isValid) {
      setStateFormValid(isValid);
    }
    setStateFormError({
      ...errors,
    });
    return isValid;
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
                
                   <FormLogin
                      props={{
                        onSubmitHandler,
                        onChangeHandler,
                        loading,
                        stateFormData,
                        stateFormError,
                        stateFormMessage,
                      }}
                    />
           <Flex my={3}>
              <Link href="/" sx={styles.link}><Text>Forgot password?</Text></Link>
               <Link href="/user/register" sx={styles.link}><Text>Register.</Text></Link>
            </Flex>
          </Box>
          </Grid>
          {stateFormError.error && (
         <Box sx={{
            width: '80%', 
            backgroundColor: 'primary', 
            position: 'fixed', 
            bottom: 2,
            borderRadius: 5,
            padding: 3}}>
            <Text sx={{color: '#fff'}}>{stateFormError.error}</Text>
        </Box>
        )}
          </Container>
          </Layout>
          </ThemeProvider>
  );
}

const styles = {
  workflow: {
      mt: 4,
      backgroundColor: '#fff',
    py: [7, null, 9, null, null, 7],
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

export async function getServerSideProps(context) {
  const { query, req } = context;
  const { nextPage } = query;
  const { origin } = absoluteUrl(req);
  const referer = req.headers.referer || '';
  const nextPageUrl = !isNaN(nextPage) ? `?nextPage=${nextPage}` : '';
  
  return {
    props: {
      origin,
      referer,
      query,
    },
  };
}
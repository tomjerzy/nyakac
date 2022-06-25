import React, { useState, useEffect } from 'react';
import { ThemeProvider, Text, Heading, Box, Image, Grid, Container } from 'theme-ui';
import { useRouter } from 'next/router';
import LoginImg from 'assets/register.png';
import theme from 'theme';

/* utils */
import { absoluteUrl } from '../../../middleware/utils';

/* components */
import Layout from 'components/layout';
import FormRegister from '../../components/forms/RegisterForm';

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* register schemas */
const FORM_DATA_REGISTER = {
  gender: {
    value: 'male',
    label: 'Gender',
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z\W\w]+$/,
    }
  },
  f_name: {
    value: '',
    label: 'First name',
    min: 2,
    max: 20,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Provided First name not allowed',
    },
  },
  l_name: {
    value: '',
    label: 'Last name',
    min: 3,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Provided last name not allowed',
    },
  },
  phone: {
    value: '',
    label: 'Phone',
    required: false,
    validator: {
      regEx: /^-?\d+\.?\d*$/,
      error: 'Please provide valid phone number',
    },
  },
  username: {
    value: '',
    label: 'Username',
    min: 2,
    max: 26,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Provided username not allowed',
    },
  },
  email: {
    value: '',
    label: 'Email',
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: emailRegEx,
      error: 'Email filled incorrectly',
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
      error: 'Password filled incorrectly',
    },
  },
};

function Register(props) {
  const router = useRouter();
  const { origin, baseApiUrl } = props;
  const [loading, setLoading] = useState(false);
  const [stateFormData, setStateFormData] = useState(FORM_DATA_REGISTER);
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
    validationHandler(stateFormData, e);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();

    let data = { ...stateFormData };

    /* validation handler */
    const isValid = validationHandler(stateFormData);

    if (isValid) {
      /* f_name */
      data = { ...data, f_name: data.f_name.value || '' };
      /* l_name */
      data = { ...data, l_name: data.l_name.value || '' };
      /* phone */
      data = { ...data, phone: data.phone.value || '' };
      /* username */
      data = { ...data, username: data.username.value || '' };
      /* email */
      data = { ...data, email: data.email.value || '' };
      /* password */
      data = { ...data, password: data.password.value || '' };
      data = { ...data, gender: data.gender.value || '' };
      /* validation handler */
      const isValid = validationHandler(stateFormData);

      if (isValid) {
        setLoading(!loading);
        const loginApi = await fetch('../api/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        
        let result = await loginApi.json();
        setStateFormError(result)
        setStateFormMessage(result)
        if (result.status === 'success' && result.message === 'done') {
          window.location.href = '/';
        } else {
          setStateFormMessage(result);
        }
        setLoading(false);
      }
    }
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
          hint: `Min ${states[input].label} length ${states[input].min}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].value &&
        states[input].max < states[input].value.length
      ) {
        errors[input] = {
          hint: `Min ${states[input].label} length ${states[input].max}`,
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
              hint: `Min ${field.label} length ${field.min}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.value && field.max <= field.value.length) {
            errors[item[0]] = {
              hint: `Min ${field.label} length ${field.max}`,
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
                Create account
            </Heading>
            <Text sx={{color: 'grey'}}>
                Be a verified member
                </Text>
            </Box>
            <Box>
                <Heading as="h5" mb="15px">Create an account</Heading>
          <FormRegister
            props={{
              onSubmitHandler,
              onChangeHandler,
              loading,
              stateFormData,
              stateFormError,
              stateFormMessage,
            }}
          />
        </Box>
        </Grid>
        {stateFormMessage.error && 
         <Box sx={{
            width: '80%', 
            backgroundColor: 'primary', 
            position: 'fixed', 
            bottom: 2,
            borderRadius: 5,
            padding: 3}}>
            <Text sx={{color: '#fff'}}>{stateFormError.error}</Text>
        </Box>
        }
        </Container>
        </Layout>
        </ThemeProvider>
  );
}

/* getServerSideProps */
export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const referer = req.headers.referer || '';
  const baseApiUrl = `${origin}/api`;

  return {
    props: {
      origin,
      baseApiUrl,
      referer,
    },
  };
}
const styles = {
  workflow: {
      backgroundColor: '#fff',
    py: [7, null, 9, null, null, 7],
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
export default Register;
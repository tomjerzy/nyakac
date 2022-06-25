import React, {useState} from 'react'
import {Flex, Button, Text, Select} from 'theme-ui'
import { FaEye, FaEyeSlash} from 'react-icons/fa';
function FormRegister({ props }) {
  const [active, setActive] = useState(true)
    const {
      onSubmitHandler,
      onChangeHandler,
      loading,
      stateFormData,
      stateFormError,
      stateFormMessage,
    } = props;
  
    return (
      <form
        onSubmit={onSubmitHandler}
        className="form-register card"
        method="POST"
      >
        <div className="form-group">
       
          <hr />
          
        </div>
        <div>
        <Select ml="3"
                    name="gender"  id="gender"
                    readOnly = {loading && true}
                    defaultValue={stateFormData.gender.value} onChange={onChangeHandler}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Select>
        </div>
        <div>
        <input
                placeholder='First name' 
                defaultValue={stateFormData.f_name.value} 
                name="f_name" 
                className="form-control"
                type="text" 
                id="f_name"
                style={styles.input}
                readOnly={loading && true}
                onChange={onChangeHandler}/> 

{stateFormError.f_name && (
            <Text sx={{color: 'primary'}}>{stateFormError.f_name.hint}</Text>
          )}
        </div>
        <div>
        <input 
                placeholder='Last name' 
                defaultValue={stateFormData.l_name.value} 
                name="l_name" 
                className="form-control"
                type="text" 
                id="l_name"
                style={styles.input}
                readOnly={loading && true}
                onChange={onChangeHandler}/> 
                {stateFormError.l_name && (
            <Text sx={{color: 'primary'}}>{stateFormError.l_name.hint}</Text>
          )}
        </div>
        <div className="form-group">
          <input style={styles.input}
            onChange={onChangeHandler}
            className="form-control"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            readOnly={loading && true}
            defaultValue={stateFormData.username.value}
          />
          {stateFormError.username && (
            <Text sx={{color: 'primary'}}>{stateFormError.username.hint}</Text>
          )}
        </div>
        <div className="form-group">
          <input style={styles.input}
            onChange={onChangeHandler}
            className="form-control"
            type="number"
            pattern="/^-?\d+\.?\d*$/" onKeyPress={(val) => {if(val.length==11) return false;}}
            id="phone"
            name="phone"
            placeholder="Phone number" required
            readOnly={loading && true}
            defaultValue={stateFormData.phone.value}
          />
          {stateFormError.phone && (
            <Text sx={{color: 'primary'}}>{stateFormError.phone.hint}</Text>
          )}
        </div>
        <div className="form-group" >
          <input style={styles.input}
            onChange={onChangeHandler}
            className="form-control"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            readOnly={loading && true}
            defaultValue={stateFormData.email.value}
          />
          {stateFormError.email && (
            <Text sx={{color: 'primary'}}>{stateFormError.email.hint}</Text>

          )}
        </div>
        <Flex sx={{alignItems: 'center'}}>
          <input style={styles.input}
            onChange={onChangeHandler}
            className="form-control"
            type= {active ? 'password' : 'text' }
            id="password"
            name="password"
            placeholder="Password"
            readOnly={loading && true}
            defaultValue={stateFormData.password.value}
          />
          <Text onClick={() => setActive(!active)} sx={{ fontSize: 30, cursor: 'pointer', color: 'primary'}}>
            {active ? <FaEye /> : <FaEyeSlash />}</Text>
        </Flex>
        {stateFormError.password && (
            <Text sx={{color: 'primary'}}>{stateFormError.password.hint}</Text>
          )}
        
        <div>
          <Button
            type="submit"
            className="btn btn-block btn-warning"
            disabled={loading}
            onClick={onSubmitHandler}
          >
            {!loading ? 'Register' : 'Registering...'}
          </Button>
        </div>
      </form>
    );
  }

  const styles = {
    input: {
      backgroundColor: '#cecece',
      border: 'none',
      width: '100%',
      padding: 10,
      borderRadius: 5,
      margin: 10,
    }
  }
  export default FormRegister;
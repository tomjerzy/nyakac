import {Button, Text} from 'theme-ui'

function FormLogin({ props }) {
    const {
      onSubmitHandler,
      onChangeHandler,
      loading,
      stateFormData,
      stateFormError,
      stateFormMessage,
    } = props;
  
    return (
      <form className="form-login card" method="POST" onSubmit={onSubmitHandler}>
         
        <div className="form-group">
          
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            placeholder="Email or Username"
            onChange={onChangeHandler}
            readOnly={loading && true}
            value={stateFormData.email.value}
            style={styles.input}
          />
          {stateFormError.email && (
            <Text sx={{color: 'primary'}}>{stateFormError.email.hint}</Text>
          )}
        </div>
        <div className="form-group">
          <input style={styles.input}
            className="form-control"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChangeHandler}
            readOnly={loading && true}
            value={stateFormData.email.password}
          />
          {stateFormError.password && (
            <Text sx={{color: 'primary'}}>{stateFormError.password.hint}</Text>
          )}
        </div>
        <div>
          <Button
            type="submit"
            variarnt="primary"
            disabled={loading}
          >
            {!loading ? 'Login' : 'Loading...'}
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
    
  };

  export default FormLogin;
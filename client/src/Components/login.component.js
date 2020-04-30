import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

class Login extends Component {

  render() {
    return (
      <Container maxWidth="xs">
        <h3 align="center" style={{marginTop : "40%",alignItems : 'center'}}>Login Here</h3>
        <form>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
          />

          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Enter Password"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
              Sign In
          </Button>
        
        </form>
      </Container>
    )
  }
}
export default Login;
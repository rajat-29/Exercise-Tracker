import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username : '',
      password : ''
    }

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleUserName(event) {
    this.setState({
      username : event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password : event.target.value
    })
  }

  loginUser(event) {
    event.preventDefault();
    const {username,password} = this.state;
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('password');

    if(username === storedName || password === storedPw) {
       console.log('hi')
       sessionStorage.setItem("name", username);
       this.props.onSubmit();
    }else {
      alert('You are loged in.');
    }
  }

  render() {

    const {username,password} = this.state;

    return (
      <Container maxWidth="xs">
        <h3 align="center" style={{marginTop : "40%",alignItems : 'center'}}>Login Here</h3>
        <form>

          <TextField
            type="text"
            variant="outlined"
            margin="normal"
            data={username}
            onChange={this.handleUserName}
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
          />

          <TextField
            type="password"
            variant="outlined"
            data={password}
            onChange={this.handlePassword}
            margin="normal"
            required
            fullWidth
            label="Enter Password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={this.loginUser}
            color="primary">
              Sign In
          </Button>
        
        </form>
      </Container>
    )
  }
}
export default Login;
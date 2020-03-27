import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import { login } from '../../actions/auth'

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event =>{
    event.preventDefault()
    const { email, password } = this.state;
    this.props.login(email, password)
  }

  render() {
    const { email, password } = this.state;
    const { goToHomeScreen, goToAdmScreen } = this.props

    return (
      <LoginWrapper onSubmit={this.handleLogin}>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
          required
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          required
          value={password}
        />
        <Button type={'submit'}
        >Login</Button>
        <Button
          onClick={goToHomeScreen}
        >Voltar</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToHomeScreen: () => dispatch(push(routes.homeScreen)),
    goToAdmScreen: () => dispatch(push(routes.admPage)),
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);

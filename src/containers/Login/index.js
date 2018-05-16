import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { user } from 'helpers/user'
import { Redirect } from 'react-router'
import LoginForm from 'components/Login'
import { Google, Slack } from 'components/Buttons/SignButtons'
import Divider from 'components/Shared/Divider'
import DefaultButton from 'components/Buttons/DefaultButton'
import TransparentButton from 'components/Buttons/TransparentButton'
import { connect } from 'react-redux'
import login from 'containers/Login/actions/login'
import goToSignUp from 'containers/Login/actions/goToSignUp'
import './login.scss'
import ResetPassword from 'components/ResetPassword'
import resetPassword from 'components/ResetPassword/actions/resetPassword'


class Login extends Component {

  static propTypes = {
    goToSignUp: PropTypes.func,
    login: PropTypes.func,
    resetPassword: PropTypes.func,
  }

  state = {
    reset: false,
  }

  onLogIn = () => {
    const { login } = this.props
    login()
  }

  onSignClick = () => {
    const { goToSignUp } = this.props
    goToSignUp()
  }

  onResetPassword = () => {
    const { resetPassword } = this.props
    this.setState({ reset: false })
    resetPassword()
  }

  render() {
    const { reset } = this.state
    const { isLogged } = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (isLogged || user.isAuthenticated()) {
      return <Redirect to={from}/>
    }

    if (reset) {
      return <div className="login-page"><ResetPassword
        onClose={() => this.setState({ reset: false })}
        resetPassword={this.onResetPassword}/>
      </div>
    }

    return <div className="login-page">
      <LoginForm footer={<div onClick={this.onSignClick} className="login-page__footer">Don’t have an account? Sign up
        for <br/> one</div>}>
        <Slack className={'login-btn'}>Log in with Slack</Slack>
        <Google className={'login-btn'}>Log in with Google</Google>
        <Divider className="divider-block"><span>or</span></Divider>
        <input style={{ opacity: 0, position: 'absolute', top: '-9999px' }}/>
        <input type="password" style={{ opacity: 0, position: 'absolute', top: '-9999px' }}/>
        <Field name={'username'}
               component={'input'} type={'text'}
               className={'login-page__field login-page__username'}
               autoComplete={'nope'}
               placeholder={'email'}
        />
        <Field name={'password'}
               component={'input'} type={'password'}
               className={'login-page__field login-page__password'}
               autoComplete={'nope'}
               placeholder={'password'}
        />
        <DefaultButton onClick={this.onLogIn} className={'login-btn'}>Log In</DefaultButton>
        <TransparentButton onClick={() => this.setState({ reset: true })} className={'reset-btn'}>Reset
          password</TransparentButton>
      </LoginForm>
    </div>

  }
}


export default connect(({ common }) => ({ ...common }), { login, goToSignUp, resetPassword })(reduxForm({
  form: 'loginForm',
})(Login))
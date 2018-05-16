import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { user } from 'helpers/user'
import { Redirect } from 'react-router'
import LoginForm from 'components/Login'
import { Google, Slack } from 'components/Buttons/SignButtons'
import Divider from 'components/Shared/Divider'
import ResetPassword from 'components/ResetPassword'
import DefaultButton from 'components/Buttons/DefaultButton'
import TransparentButton from 'components/Buttons/TransparentButton'
import { connect } from 'react-redux'
import goToLogin from 'containers/Signup/actions/goToLogin'
import './login.scss'
import resetPassword from 'components/ResetPassword/actions/resetPassword'


class Signup extends Component {

  static propTypes = {
    goToLogin: PropTypes.func,
    resetPassword: PropTypes.func,
  }

  state = {
    reset: false,
  }

  onLoginClick = () => {
    const { goToLogin } = this.props
    goToLogin()
  }

  onResetPassword = () => {
    const { resetPassword } = this.props
    this.setState({ reset: false })
    resetPassword(true)
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

    return <div className="signup-page">
      <LoginForm title={'Sign up for free'}
                 footer={<div onClick={this.onLoginClick} className="signup-page__footer">Already have an account? Log
                   in <br/> here</div>}>
        <Slack className={'login-btn'}>Sign up with Slack</Slack>
        <Google className={'login-btn'}>Sign up with Google</Google>
        <Divider className="divider-block"><span>or</span></Divider>
        <input style={{ opacity: 0, position: 'absolute', top: '-9999px' }}/>
        <input type="password" style={{ opacity: 0, position: 'absolute', top: '-9999px' }}/>
        <Field name={'username'}
               component={'input'} type={'text'}
               className={'signup-page__field signup-page__username'}
               autoComplete={'nope'}
               placeholder={'email'}
        />
        <Field name={'password'}
               component={'input'} type={'password'}
               className={'signup-page__field signup-page__password'}
               autoComplete={'nope'}
               placeholder={'password'}
        />
        <Field name={'repassword'}
               component={'input'} type={'password'}
               className={'signup-page__field signup-page__password'}
               autoComplete={'nope'}
               placeholder={'verify password'}
        />
        <DefaultButton className={'login-btn'}>Sign Up</DefaultButton>
        <TransparentButton onClick={() => this.setState({ reset: true })} className={'reset-btn'}>Reset
          password</TransparentButton>
      </LoginForm>
    </div>

  }
}


export default connect(null, { goToLogin, resetPassword })(reduxForm({
  form: 'sighUpForm',
})(Signup))
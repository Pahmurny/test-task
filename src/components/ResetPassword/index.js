import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import LoginForm from 'components/Login'
import DefaultButton from 'components/Buttons/DefaultButton'
import './resetpassword.scss'


const ResetPassword = ({ resetPassword, ...rest }) => <LoginForm
  title={'Reset Password'}
  footer={<div className="login-page__footer">Already have an account? Log
    in <br/> here</div>}
  className={'reset-form'}
  {...rest}
>
  <Field className={'email-field'} component={'input'} name={'email'} type={'text'} placeholder={'email'}/>
  <DefaultButton onClick={resetPassword} className={'login-btn'}>Reset Password</DefaultButton>
  <div className="reset-text">
    Please enter the email address that you signed up with. It may take several minutes to receive a password reset
    email. Make sure to check your junk mail.
  </div>
</LoginForm>


ResetPassword.propTypes = {
  resetPassword: PropTypes.func,
  onClose: PropTypes.func
}

export default reduxForm({ form: 'resetForm' })(ResetPassword)
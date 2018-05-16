import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import { PageTitle } from 'components/Shared/PageTitle'
import './login.scss'


const Login = ({ title = 'Log In', children, footer, classNameHeader = 'login-form__header', pageClass = 'login-form__title', className, ...rest }) =>
  <FeedbackForm
    classNameHeader={classNameHeader}
    title={<PageTitle className={pageClass}>{title}</PageTitle>}
    className={cn('login-form', className)}
    {...rest}
  >
    <div className="login-form__content">{children}</div>
    {footer && <div className="login-form__footer">{footer}</div>}
  </FeedbackForm>


Login.propTypes = {
  footer: PropTypes.any,
  title: PropTypes.string,
  className: PropTypes.string
}

export default Login
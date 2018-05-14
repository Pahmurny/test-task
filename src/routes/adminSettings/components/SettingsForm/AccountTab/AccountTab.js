import React from 'react'
import './accounttab.scss'
import { FieldTitle } from 'routes/feedback/components/FeedbackForm/shared/FieldTitle.js'


const AccountTab = () => <div className="account-tab">
  <FieldTitle className={'account-tab__title'}>Billing</FieldTitle>
  <div
    className="account-tab__text"
    style={{
      marginBottom: 30,
    }}
  >
    Please reach out to <a href="mailto:letstalk@careerlark.com">letstalk@careerlark.com</a> for upgrading to our
    premium product.
  </div>
>>>>>>> origin/dev

  <FieldTitle className={'account-tab__title'}>Status</FieldTitle>
  <div className="account-tab__text">
    Please reach out to <a href="mailto:support@careerlark.com">support@careerlark.com</a> for assistance with changing
    your company’s URL or deactivating your account.
  </div>
</div>


export default AccountTab
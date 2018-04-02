import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cardPng from 'assets/png/credit card.png'
import './accounttab.scss'
import { PageTitle } from 'components/Shared/PageTitle'
import { Field } from 'redux-form'
import { BILLING_EMAIL } from 'routes/adminSettings/components/SettingsForm/inputNames'
import RequestButton from 'components/Buttons/RequestButton'


const AccountTab = () => <div className="account-tab">
    <PageTitle className={'account-tab__title'}>Billing</PageTitle>
    <div
        className="account-tab__text"
        style={{
            marginBottom:30
        }}
    >
        Please reach out to <a href="mailto:letstalk@careerlark.com">letstalk@careerlark.com</a> for upgrading to our premium product.
    </div>

    <PageTitle className={'account-tab__title'}>Status</PageTitle>
    <div className="account-tab__text">
        Please reach out to <a href="mailto:support@careerlark.com">support@careerlark.com</a> for assistance with changing your company’s URL or deactivating your account.
    </div>
</div>


export default AccountTab
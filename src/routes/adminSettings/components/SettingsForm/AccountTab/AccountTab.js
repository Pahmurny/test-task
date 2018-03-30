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
    <div className="account-tab__details">
        <div className="account-tab__col">
            <h2 className="account-tab__col--title">Card Details</h2>
            <div className="account-tab__card-details">
                <img src={cardPng} alt="card" className="card-image"/>
                <span>
                    XXXX XXXX XXXX XXXX
                </span>
                <span>
                    MM / YY
                </span>
                <span>
                    CVV
                </span>
            </div>
        </div>
        <div className="account-tab__col">
            <h2 className="account-tab__col--title">Billing Email</h2>
            <Field
                name={BILLING_EMAIL}
                component={'input'}
                type={'text'}
                className={'account-tab__input--email'}
                placeholder={'Provide email address'}
            />
        </div>
        <div className="account-tab__col last">
            <RequestButton>Update</RequestButton>
        </div>
    </div>

    <PageTitle className={'account-tab__title'}>Status</PageTitle>
    <div className="account-tab__text">
        Please reach out to <a href="mailto:support@careerlark.com">support@careerlark.com</a> for assistance with changing your company’s URL or deactivating your account.
    </div>
</div>


export default AccountTab
import React from 'react'
import { connect } from 'react-redux'
import TextField from 'components/Form/TextField'
import {
    COMPANY_EMAIL,
    COMPANY_NAME, COMPANY_NICK, COMPANY_PHONE, COMPANY_URL, DEFAULT_TIME_ZONE, LIMIT_INVITES,
    MISSION_STATEMENTS, NON_ADMINS, SELF_REGISTRATION,
} from 'routes/adminSettings/components/SettingsForm/inputNames'
import CheckboxField from 'components/Form/Checkbox/CheckboxField'
import { Field, submit } from 'redux-form'
import RequestButton from 'components/Buttons/RequestButton'
import TimezoneField from 'components/Form/TmezoneField/TimezoneField'
import './profileTab.scss'


const ProfileTab = ({ submit }) => <div className="profile-tab">
    <div className={'profile-tab top'}>
        <div className="profile-tab__logo">
            Logo
        </div>
        <div className="profile-tab__form">
            <div className="profile-tab__form--textfield-block">
                <div className="col col1">
                    <TextField
                        label={'Company name'}
                        name={COMPANY_NAME}
                        className={'text-f-container'}
                        tabIndex={1}
                    />
                    <TextField
                        tabIndex={4}
                        label={'Company email'}
                        name={COMPANY_EMAIL}
                        className={'text-f-container'}
                    />
                </div>
                <div className="col col1">
                    <TextField
                        tabIndex={2}
                        label={'Company nickname'}
                        name={COMPANY_NICK}
                        className={'text-f-container'}
                    />
                    <TextField
                        tabIndex={5}
                        label={'Company phone number'}
                        name={COMPANY_PHONE}
                        className={'text-f-container'}
                    />
                </div>
                <div className="col col1">
                    <TextField
                        tabIndex={3}
                        label={'Company URL'}
                        name={COMPANY_URL}
                        className={'text-f-container'}
                    />
                </div>
            </div>


            <div className="checkbox-block">
                <Field
                    component={CheckboxField}
                    name={NON_ADMINS}
                    className={'checkbox-block__mark'}
                />
                <div className="checkbox-block__label">Allow non-admins to change the org structure?</div>
                <div className="checkbox-block__description">Allow non-admins to send invites to new users as well as
                    change their own managers.
                </div>
            </div>

            <div className="checkbox-block">
                <Field component={CheckboxField}
                       name={SELF_REGISTRATION} className={'checkbox-block__mark'}
                />
                <div
                    className="checkbox-block__label"
                >Allow self-registration?
                </div>
                <div
                    className="checkbox-block__description"
                >Allow new team members to sign up using their company email.
                    You can invite them by sharing <a className={'link'} href="#">[link]</a>
                </div>
            </div>
            <div className="checkbox-block">
                <Field component={CheckboxField}
                       name={LIMIT_INVITES} className={'checkbox-block__mark'}
                />
                <div
                    className="checkbox-block__label"
                >Limit invites to your company email domain?
                </div>
                <div
                    className="checkbox-block__description"
                >Disallow invites going to emails outside your company domain.
                </div>
            </div>
        </div>
    </div>
    <div className="profile-tab tab-bottom">
        <div
            className="checkbox-block__label"
        >Company mission statement
        </div>
        <Field
            component={'textarea'}
            name={MISSION_STATEMENTS}
            className={'textarea-field'}
        />

        <div
            className="checkbox-block__label"
        >Default time-zone
        </div>
        <Field
            component={TimezoneField}
            name={DEFAULT_TIME_ZONE}
            className={'timezone-field'}
        />

        <div className="actions">
            <RequestButton onClick={() => submit('adminSettings')}>Save profile</RequestButton>
        </div>
    </div>
</div>


export default connect(null, { submit })(ProfileTab)
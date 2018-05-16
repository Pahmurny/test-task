import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Portal } from 'react-portal'
import TextField from 'components/Form/TextField'
import {
    COMPANY_EMAIL,
    COMPANY_NAME, COMPANY_NICK, COMPANY_PHONE, COMPANY_URL, DEFAULT_TIME_ZONE, LIMIT_INVITES,
    MISSION_STATEMENTS, NON_ADMINS, SELF_REGISTRATION, COMPANY_ADDRESS_LINE_1, COMPANY_ADDRESS_LINE_2
} from 'routes/adminSettings/components/SettingsForm/inputNames'
import CheckboxField from 'components/Form/Checkbox/CheckboxField'
import Dropzone from 'react-dropzone'
import { Field, submit } from 'redux-form'
import DefaultButton from 'components/Buttons/DefaultButton'
import TimezoneField from 'components/Form/TmezoneField/TimezoneField'
import './profileTab.scss'
import InfoIcon from 'components/Icons/InfoIcon'
import InfoBlock from 'components/Shared/InfoBlock'


class ProfileTab extends Component {

    state = {
        info: false,
    }

    onInfoMove = (text, e) => {
        const { clientX, clientY } = e
        this.setState({
            info: {
                styles: {
                    top: clientY,
                    left: clientX,
                    position: 'absolute'
                },
                text,
            },
        })
    }

    render() {
        const { submit, logo } = this.props
        const { info } = this.state

        return (<div className="profile-tab">
            <div className={'profile-tab top'}>
                <div className="profile-tab__logo">
                    <Dropzone
                        className={'profile-tab__logo--upload'}
                        acceptClassName={'hovered'}
                    >
                        {logo && <React.Fragment>
                            <img src={`${process.env.PUBLIC_URL}/images/Bitmap.jpg`} alt=""/>
                            <div className="info">upload</div>
                        </React.Fragment>}
                        {!logo && <React.Fragment>
                            <div className="empty-block">
                                Click or drag <br/> to upload <br/> company <br/> logo
                            </div>
                            <div className="empty-block-info">
                                Drop image <br/> here
                            </div>
                        </React.Fragment>}
                    </Dropzone>
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
                                label={'Company address'}
                                name={COMPANY_ADDRESS_LINE_1}
                                className={'text-f-container company-address-1'}
                            />
                            <TextField
                                tabIndex={7}
                                name={COMPANY_ADDRESS_LINE_2}
                                className={'text-f-container company-address-2'}
                            />
                        </div>
                        <div className="col col1">
                            <TextField
                                tabIndex={2}
                                label={<span>Company nickname <InfoIcon
                                    onMouseOver={(e) => this.onInfoMove('This is how we’ll reference the company in employee communications.', e)}
                                    onMouseLeave={() => this.setState({ info: false })}
                                    ref="infoIcon"/></span>}
                                name={COMPANY_NICK}
                                className={'text-f-container'}
                            />
                            {info !== false && <Portal>
                                <InfoBlock style={info.styles}>
                                    {info.text}
                                </InfoBlock>
                            </Portal>}
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
                            <TextField
                                tabIndex={6}
                                label={'Company email'}
                                name={COMPANY_EMAIL}
                                className={'text-f-container company-email'}
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
                        <div className="checkbox-block__description">Allow non-admins to send invites to new users as
                            well as
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
                    <DefaultButton onClick={() => submit('adminSettings')}>Save profile</DefaultButton>
                </div>
            </div>
        </div>)
    }
}


ProfileTab.defaultProps = {
    logo: false,
}

export default connect(null, { submit })(ProfileTab)
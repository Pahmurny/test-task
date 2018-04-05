import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Field, reduxForm, getFormValues, getFormInitialValues } from 'redux-form'
import { connect } from 'react-redux'
import './mamberform.scss'
import ToggleFormField from 'components/Form/Toggle/ToggleFormField'
import DefaultButton from 'components/Buttons/DefaultButton'
import UserPic from 'components/Shared/UserPic'
import TextFieldLabel from 'components/Form/TextField/TextFieldLabel'
import DatePicker from 'components/Form/Datepicker/DatePicker'


const ActivateField = ({ input: { value, onChange } }) => {
    const isTrue = !!value

    return (<div
        onClick={() => onChange(!value)}
        className={cn('btn deactivate', { active: !isTrue })}
    >{isTrue ? 'Deactivate' : 'Activate'}</div>)
}


const MemberForm = ({ formValues }) => {

    const { isAdmin, active, image } = formValues

    return (<div className="member-form">
        <div className="member-form__content">
            <div className="member-form__content--col">
                <div className="member-form__content--userpic">
                    <h3>Personal:</h3>
                    <UserPic image={image} width={'72px'}/>
                </div>
                <div className="member-form__content--companylogo">

                </div>
            </div>
            <div className="member-form__content--col">
                <Field
                    component={TextFieldLabel}
                    label={'First Name'}
                    name={'first_name'}
                    className={'member-form__text-field'}
                />
                <Field
                    component={TextFieldLabel}
                    label={'Last Name'}
                    name={'last_name'}
                    className={'member-form__text-field'}
                />

                <Field
                    component={TextFieldLabel}
                    label={'Email Address'}
                    name={'email'}
                    className={'member-form__text-field'}
                />

                <Field
                    component={TextFieldLabel}
                    label={'Job Title'}
                    name={'job_title'}
                    className={'member-form__text-field job-title'}
                />
            </div>
            <div className="member-form__content--col">
                <Field
                    component={TextFieldLabel}
                    label={'Preferred Name'}
                    name={'preferred_name'}
                    className={'member-form__text-field'}
                />

                <Field
                    component={DatePicker}
                    label={'Start Date'}
                    name={'start_date'}
                    className={'member-form__date-field'}
                />

            </div>
        </div>
        <div className="member-form__actions">
            <Field
                component={ToggleFormField}
                name={'isAdmin'}
                leftLabel={'Admin'}
                rightLabel={'Non-admin'}
                className={'member-form__admin-state'}
            />
            {isAdmin && <div className="admin-state-info">This employee has full admin permissions.</div>}

            <div className="member-form__actions--btns">
                <Field component={ActivateField} name={'active'}/>
                <DefaultButton round={3}>Save</DefaultButton>
            </div>
        </div>
    </div>)
}


const form = reduxForm({
    form: 'memberForm',
})(MemberForm)


/** @namespace state.memberData */
export default connect(state => ({
    initialValues: state.people.memberData,
    formValues: { ...getFormInitialValues('memberForm')(state), ...getFormValues('memberForm')(state) },
}))(form)
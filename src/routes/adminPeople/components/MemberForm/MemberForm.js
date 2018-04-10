import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Field, reduxForm, getFormValues, getFormInitialValues, Form } from 'redux-form'
import { connect } from 'react-redux'
import './mamberform.scss'
import ToggleFormField from 'components/Form/Toggle/ToggleFormField'
import DefaultButton from 'components/Buttons/DefaultButton'
import UserPic from 'components/Shared/UserPic'
import TextFieldLabel from 'components/Form/TextField/TextFieldLabel'
import DatePicker from 'components/Form/Datepicker/DatePicker'
import TagsFormField from 'components/Form/TagsField/TagsFormField'
import TagsFormFieldOption from 'components/Form/TagsField/TagsFormFieldOption'
import updatePerson from 'routes/adminPeople/actions/updatePerson'


const ActivateField = ({ input: { value, onChange } }) => {
    const isTrue = !!value

    return (<div
        onClick={() => {
            if (isTrue) {
                if (window.confirm('Deactivate?') === true) {
                    onChange(!value)
                }
            } else {
                onChange(!value)
            }

        }}
        className={cn('btn deactivate', { active: !isTrue })}
    >{isTrue ? 'Deactivate' : 'Activate'}</div>)
}


const MemberForm = ({ formValues, iniValues, tags, managers, handleSubmit, submit, updatePerson, initialValues: { company } }) => {

    const { isAdmin, active, image } = formValues
    const { name, logo } = company

    return (
        <Form onSubmit={handleSubmit(updatePerson)} className={'member-form'}>
            <div className="member-form__content">
                <div className="member-form__content--col">
                    <div className="member-form__content--userpic">
                        <h3>Personal:</h3>
                        <UserPic image={image} width={'72px'}/>
                    </div>
                    <div className="member-form__content--companylogo">
                        <h3>{name}</h3>
                        <img
                            src={logo}
                            alt={name}
                            style={{ width: 72, height: 72 }}
                        />
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

                    <Field
                        component={TagsFormField}
                        label={'Team Tags'}
                        name={'team_tags'}
                        className={'member-form__tags-field'}
                        options={tags}
                        optionComponent={TagsFormFieldOption}
                        multi
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

                    <Field
                        component={TextFieldLabel}
                        label={'Phone'}
                        name={'phone_number'}
                        className={'member-form__text-field'}
                    />

                    <Field
                        component={TagsFormField}
                        label={'Manager'}
                        name={'managerId'}
                        className={'member-form__tags-field'}
                        style={{ marginTop: 50 }}
                        options={managers.map(manager => ({ label: manager.name, value: manager.id }))}
                        optionComponent={TagsFormFieldOption}
                        valueUnmapper={v => v.value}
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
                    <DefaultButton
                        round={3}
                        onClick={() => submit()}
                    >Save</DefaultButton>

                </div>
            </div>
        </Form>
    )
}


const form = reduxForm({
    form: 'memberForm',
    //validate: (values) => ({ isAdmin: 'Error' }),
})(MemberForm)


/** @namespace state.memberData */
export default connect(state => ({
    initialValues: state.people.memberData,
    formValues: { ...getFormInitialValues('memberForm')(state), ...getFormValues('memberForm')(state) },
    iniValues: getFormInitialValues('memberForm')(state),
    tags: state.common.tags || [],
    managers: state.common.managers || [],
}), { updatePerson })(form)
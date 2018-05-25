import React from 'react'
import store from 'store'
import cn from 'classnames'
import { Field, Form, getFormInitialValues, getFormValues, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import ToggleFormField from 'components/Form/Toggle/ToggleFormField'
import DefaultButton from 'components/Buttons/DefaultButton'
import UserPic from 'components/Shared/UserPic'
import TextFieldLabel from 'components/Form/TextField/TextFieldLabel'
import DatePicker from 'components/Form/Datepicker/DatePicker'
import TagsFormField from 'components/Form/TagsField/TagsFormField'
import TagsFormFieldOption from 'components/Form/TagsField/TagsFormFieldOption'
import updatePerson from 'routes/adminPeople/actions/updatePerson'
import FormTagsField from 'components/Form/TagsField/FormTagsField'
import updatePeopleValue from 'routes/adminPeople/actions/updatePeopleValue'
import './mamberform.scss'


const ActivateField = ({ input: { value, onChange }, meta: { dispatch, form } }) => {
  const isTrue = !!value
  const manager = getFormValues(form)(store.getState())
  return (<div
    onClick={() => {
      if (isTrue) {
        dispatch(updatePeopleValue('deactivateMember', manager))
      } else {
        onChange(!value)
      }

    }}
    className={cn('btn deactivate', { active: !isTrue })}
  >{isTrue ? 'Deactivate' : 'Activate'}</div>)
}


const MemberForm = ({ formValues, iniValues, tags, managers, handleSubmit, submit, updatePerson, initialValues: { company } }) => {

   const { isAdmin, image } = formValues
   const { name, logo } = company

  return (
    <Form onSubmit={handleSubmit(updatePerson)} className={'member-form'}>
      <div className="member-form__content">
        <div className="member-form__content--entity">
          <h3>Personal:</h3>
            <div className="member-form__content--row">

              <div className="member-form__content--pic">
                <UserPic image={image} width={'114px'}/>
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
             </div>
          </div>
        </div>

        <div className="member-form__content--entity">
          <h3>{name}:</h3>

          <div className="member-form__content--row">
              <div className="member-form__content--pic">
                <img
                    src={logo}
                    alt={name}
                    style={{ width: 108, height: 108 }}
                />
              </div>

            <div className="member-form__content--col">
              <div className="member-form__content--row">

              <div className="member-form__content--col">
                <Field
                  component={TextFieldLabel}
                  label={'Job Title'}
                  name={'job_title'}
                  className={'member-form__text-field'}
                />
              </div>

              <div className="member-form__content--col">
                <Field
                  component={FormTagsField}
                  label={'Manager'}
                  name={'manager'}
                  className={'member-form__tags-field'}
                  allPeople={managers}
                  placeholder={''}
                  one
                />
              </div>                
            </div>

              <div className="member-form__content--row">
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
            </div>
          </div>
        </div>

        <div className="member-form__content--entity">
          <h3></h3>
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
        {!isAdmin && <div className="admin-state-info">This employee does not have any admin permissions.</div>}
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
  initialValues: { ...state.people.memberData },
  formValues: { ...getFormInitialValues('memberForm')(state), ...getFormValues('memberForm')(state) },
  iniValues: getFormInitialValues('memberForm')(state),
  tags: state.common.tags || [],
  managers: state.common.managers || [],
}), { updatePerson })(form)
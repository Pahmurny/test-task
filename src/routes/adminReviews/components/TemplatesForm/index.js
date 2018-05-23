import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import './templatesForm.scss'
import { TEMPLATE_QUESTION } from 'routes/adminReviews/components/TemplatesForm/TemplatesFormValues'
import Question from 'routes/adminReviews/components/TemplatesForm/Question'



class TemplatesForm extends Component {


  render() {
    return <div className="templates-form">
      <div className="templates-form__white-block">
        <label className="templates-form__label">Template Name
          <Field
            component="input"
            type={'text'}
            className="templates-form__wide-textfield"
            name={'template-name'}
          />
        </label>

        <label className="templates-form__label">Question(s)</label>
      </div>
      <FieldArray name={TEMPLATE_QUESTION} component={Question}/>
    </div>
  }
}


TemplatesForm.displayName = 'TemplatesForm'


export default reduxForm({ form: 'templatesForm', initialValues: {
  [TEMPLATE_QUESTION]:[]
  } })(TemplatesForm)
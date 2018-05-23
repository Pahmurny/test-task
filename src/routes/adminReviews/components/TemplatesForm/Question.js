import React from 'react'

import { Field } from 'redux-form'
import CloseGreyIcon from 'components/Icons/CloseGreyIcon'
import PlusButton from 'components/Buttons/PlusButton'
import CheckboxField from 'components/Form/Checkbox/CheckboxField'

const Question = ({ fields }) => <React.Fragment>
  {fields.map((field, key) => <div key={key} className="templates-form__white-block yellow">
    <div className="templates-form__label small">
      <div className="action-place">
        What is your question?
        <Field
          name={`${field}-hrs-only`}
          component={CheckboxField}
          style={{ marginLeft: 10 }}
        /> HR only
        <CloseGreyIcon style={{ marginLeft: 'auto' }} onClick={()=> fields.remove(key)}/>
      </div>
      <Field
        component="input"
        type={'text'}
        className="templates-form__wide-textfield"
        name={`${field}-question-body`}
      />
    </div>
    <label className="templates-form__label small">
      Description (optional)
      <Field
        component="textarea"
        type={'text'}
        className="templates-form__text-area"
        name={`${field}-question-description`}
      />
    </label>
  </div>)}
  <div className="templates-form__more-question" onClick={() => fields.push({ '-question-body': '', '-question-description': '' })}>
    <PlusButton className="plus-btn"/> Question
  </div>
</React.Fragment>


export default Question
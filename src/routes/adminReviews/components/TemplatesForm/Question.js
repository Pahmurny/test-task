import React from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray } from 'redux-form'
import CloseGreyIcon from 'components/Icons/CloseGreyIcon'
import PlusButton from 'components/Buttons/PlusButton'
import CheckboxField from 'components/Form/Checkbox/CheckboxField'
import {
  QUESTION_TYPE_EMOJI,
  QUESTION_TYPE_MULTIPLE_CHOICE,
  QUESTION_TYPE_MULTIPLE_SELECTION,
  QUESTION_TYPE_NUMBERS,
  QUESTION_TYPE_WRITE,
  TEMPLATE_QUESTION_TYPE,
} from 'routes/adminReviews/components/TemplatesForm/TemplatesFormValues'
import EmojiArray from 'routes/adminReviews/components/TemplatesForm/FieldsArray/EmojiArray'
import NumberArray from 'routes/adminReviews/components/TemplatesForm/FieldsArray/NumberArray'
import TextArray from 'routes/adminReviews/components/TemplatesForm/FieldsArray/TextArray'
import { MakeFakeQuestion } from 'routes/adminReviews/components/TemplatesForm/index'
import TextAreaField from 'components/Form/TextAreaField/TextAreaField'
import TypeDropdown from 'routes/adminReviews/components/TemplatesForm/TypeDropdown'


const FieldArrays = {
  [QUESTION_TYPE_EMOJI]: EmojiArray,
  [QUESTION_TYPE_NUMBERS]: NumberArray,
  [QUESTION_TYPE_MULTIPLE_CHOICE]: TextArray,
  [QUESTION_TYPE_MULTIPLE_SELECTION]: TextArray,
}

/**
 * Get Question Type by key
 * @param key
 * @param questionTemplates
 * @returns {bool | string}
 */
const getType = (key, questionTemplates) => {
  if (!questionTemplates || !Array.isArray(questionTemplates)) {
    return false
  }
  return questionTemplates[key][TEMPLATE_QUESTION_TYPE]
}

/**
 * Question Template block
 * @param fields
 * @param formTypes
 * @param questionTemplates
 * @returns {*}
 * @constructor
 */
const Question = ({ fields, formTypes, questionTemplates }) => {


  return <React.Fragment>
    {fields.map((field, key) => <div key={key} className="templates-form__white-block yellow">
      <div className="templates-form__label small">
        <div className="action-place">
          What is your question?
          <Field
            name={`${field}-hrs-only`}
            component={CheckboxField}
            style={{ marginLeft: 10 }}
          /> HR only
          <CloseGreyIcon style={{ marginLeft: 'auto' }} onClick={() => fields.remove(key)}/>
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

      <Field
        component={TypeDropdown}
        name={`${field}.${TEMPLATE_QUESTION_TYPE}`}
      />

      <div className="templates-form__fields-array">{(getType(key, questionTemplates) && getType(key, questionTemplates) !== QUESTION_TYPE_WRITE) && <FieldArray
        name={`${field}.${getType(key, questionTemplates)}`}
        component={FieldArrays[getType(key, questionTemplates)]}
      />}</div>

      {(getType(key, questionTemplates) && getType(key, questionTemplates) === QUESTION_TYPE_WRITE) && <TextAreaField
        name={`${field}.${getType(key, questionTemplates)}`}
        className={'templates-form__write-field'}
        placeholder={'Required, what is your response?'}
      />}
    </div>)}
    <div className="templates-form__more-question"
         onClick={() => fields.push(MakeFakeQuestion())}>
      <PlusButton className="plus-btn"/> Question
    </div>
  </React.Fragment>
}


Question.propTypes = {
  formTypes: PropTypes.array,
  questionTemplates: PropTypes.array,
}

export default Question
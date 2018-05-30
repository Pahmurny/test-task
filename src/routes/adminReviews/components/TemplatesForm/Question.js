/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import uid from 'uid'
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
import CheckboxFieldLabel from 'components/Form/Checkbox/withLabel/CheckboxFieldLabel'
import DefaultButton from 'components/Buttons/DefaultButton'
import { pathOr } from 'rambda'
import PencilIcon from 'components/Icons/PencilIcon'
import RemoveIcon from 'components/Icons/RemoveIcon'


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
 * @returns {boolean | string}
 */
const getType = (key, questionTemplates) => {
  if (!questionTemplates || !Array.isArray(questionTemplates)) {
    return false
  }
  return questionTemplates[key][TEMPLATE_QUESTION_TYPE]
}


/**
 * Get Question ID
 * @param key
 * @param questionTemplates
 * @returns {boolean | string}
 */
const getId = (key, questionTemplates) => {
  if (!questionTemplates || !Array.isArray(questionTemplates)) {
    return false
  }
  return questionTemplates[key]['_id']
}

/**
 * Get Question Title
 * @param key
 * @param questionTemplates
 * @returns {boolean | string}
 */
const getTitle = (key, questionTemplates) => {
  return pathOr('--------', ['title'], questionTemplates[key])
}


/**
 * Template to render Read-Only line
 * @param countNumber
 * @param id
 * @param children
 * @param rest other props
 * @returns {*}
 * @constructor
 */
const ReadonlyLine = ({ countNumber, id, children, ...rest }) => <div
  className="templates-form__read-only" {...rest}>{`${countNumber}`}. {children}</div>


/**
 * Question Template block
 * @param fields
 * @param questionTemplates
 * @param setQuestionState
 * @param onEdit
 * @param editQuestion
 * @param completeQuestion
 * @returns {*}
 * @constructor
 */
const Question = ({ fields, questionTemplates, setQuestionState, onEdit, editQuestion, completeQuestion }) => {


  return <React.Fragment>
    {fields.map((field, key) => {
      const id = getId(key, questionTemplates)
      if (!onEdit.includes(id)) {
        return <ReadonlyLine
          countNumber={key + 1}
          key={key}
        >{getTitle(key, questionTemplates)}
          <PencilIcon
            className={'templates-form__edit-icon'}
            onClick={() => editQuestion(getId(key, questionTemplates))}
          />
          <RemoveIcon
            className="templates-form__remove-icon"
            onClick={() => {
              setQuestionState(getId(key, questionTemplates), false)
              fields.remove(key)
            }}
          />
        </ReadonlyLine>
      }

      return <div key={key} className="templates-form__white-block yellow">
        <div className="templates-form__label small">
          <div className="action-place">
            What is your question?
            <Field
              name={`${field}-hrs-only`}
              component={CheckboxField}
              style={{ marginLeft: 10 }}
            /> HR only
            <CloseGreyIcon
              style={{ marginLeft: 'auto' }}
              onClick={() => {
                setQuestionState(getId(key, questionTemplates), false)
                fields.remove(key)
              }}
            />
          </div>
          <Field
            component="input"
            type={'text'}
            className="templates-form__wide-textfield"
            name={`${field}.title`}
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

        <div className="templates-form__type-section">
          <Field
            component={TypeDropdown}
            name={`${field}.${TEMPLATE_QUESTION_TYPE}`}
          />
          {getType(key, questionTemplates) && <CheckboxFieldLabel
            name={`${field}.optional`}
            label={'Answer optional?'}
            className="templates-form__optional"
          />}
        </div>

        <div
          className="templates-form__fields-array">{(getType(key, questionTemplates) && getType(key, questionTemplates) !== QUESTION_TYPE_WRITE) &&
        <FieldArray
          name={`${field}.${getType(key, questionTemplates)}`}
          component={FieldArrays[getType(key, questionTemplates)]}
        />}</div>

        {(getType(key, questionTemplates) && getType(key, questionTemplates) === QUESTION_TYPE_WRITE) && <TextAreaField
          name={`${field}.${getType(key, questionTemplates)}`}
          className={'templates-form__write-field'}
          placeholder={'Required, what is your response?'}
        />}
        {(getType(key, questionTemplates) && getType(key, questionTemplates) !== QUESTION_TYPE_WRITE) &&
        <div className="templates-form__optional-comment">
          <CheckboxFieldLabel
            name={`${field}.optionalComment`}
            label={'Optional comment?'}
            className="templates-form__optional"
          />
        </div>}
        <div className="templates-form__actions">
          {/*by clicking here dispatch action to set this question as complete*/}
          <DefaultButton onClick={() => completeQuestion(getId(key, questionTemplates))}>Complete</DefaultButton>
        </div>
      </div>
    })}
    <div className="templates-form__more-question"
         onClick={() => {
           const id = uid()
           setQuestionState(id)
           fields.push(MakeFakeQuestion(id))
         }}>
      <PlusButton className="plus-btn"/> Question
    </div>
  </React.Fragment>
}


Question.propTypes = {
  questionTemplates: PropTypes.array,
  setQuestionState: PropTypes.func.isRequired,
  completeQuestion: PropTypes.func.isRequired,
  editQuestion: PropTypes.func.isRequired,
}

export default Question
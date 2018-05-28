/* eslint-disable */
import React, { Component } from 'react'
import { Field, FieldArray, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import './templatesForm.scss'
import {
  QUESTION_TYPE_EMOJI,
  QUESTION_TYPE_MULTIPLE_CHOICE,
  QUESTION_TYPE_MULTIPLE_SELECTION,
  QUESTION_TYPE_NUMBERS,
  QUESTION_TYPE_WRITE,
  TEMPLATE_QUESTION,
} from 'routes/adminReviews/components/TemplatesForm/TemplatesFormValues'
import Question from 'routes/adminReviews/components/TemplatesForm/Question'


export const MAX_VARIANTS = 10
export const TEMPLATE_FORM_NAME = 'templatesForm'

const select = formValueSelector(TEMPLATE_FORM_NAME)


const fakeValues = [
  {
    value: 'Very below expectations',
    emoji: 0x1F614
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F612
  },
  {
    value: 'Very below expectations',
    emoji: 0x1F616
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F604
  },
  {
    value: 'Very below expectations',
    emoji: 0x1F604
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F604
  },
  {
    value: 'Very below expectations',
    emoji: 0x1F604
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F604
  },
  {
    value: 'Very below expectations',
    emoji: 0x1F604
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F604
  },

]


export const MakeFakeQuestion = () => ({
  '-question-body': 'test',
  [QUESTION_TYPE_EMOJI]: fakeValues.map(v => ({ value: `emoji-${v.value}`, emoji: v.emoji })),
  [QUESTION_TYPE_NUMBERS]: fakeValues.map(v => ({ value: `numbers-${v.value}` })),
  [QUESTION_TYPE_MULTIPLE_CHOICE]: fakeValues.map(v => ({ value: `choice-${v.value}` })),
  [QUESTION_TYPE_MULTIPLE_SELECTION]: fakeValues.map(v => ({ value: `selection-${v.value}` })),
})


class TemplatesForm extends Component {


  render() {
    const { formTypes, questionTemplates } = this.props

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
      <FieldArray
        name={TEMPLATE_QUESTION}
        component={Question}
        formTypes={formTypes}
        questionTemplates={questionTemplates}
      />
    </div>
  }
}


TemplatesForm.displayName = 'TemplatesForm'


const form = reduxForm({
  form: TEMPLATE_FORM_NAME,
})(TemplatesForm)

export default connect(state => ({
  initialValues: {
    [TEMPLATE_QUESTION]: [MakeFakeQuestion()],
  },
  questionTemplates: select(state, TEMPLATE_QUESTION),
  formTypes: [
    {
      id: QUESTION_TYPE_EMOJI,
      label: 'emoji',
    },
    {
      id: QUESTION_TYPE_NUMBERS,
      label: 'numbers',
    },
    {
      id: QUESTION_TYPE_MULTIPLE_CHOICE,
      label: 'choice',
    },
    {
      id: QUESTION_TYPE_MULTIPLE_SELECTION,
      label: 'selection',
    },
    {
      id: QUESTION_TYPE_WRITE,
      label: 'write',
    },
  ],
}))(form)
/* eslint-disable */
import React, { Component } from 'react'
import { Field, FieldArray, formValueSelector, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  QUESTION_TYPE_EMOJI,
  QUESTION_TYPE_MULTIPLE_CHOICE,
  QUESTION_TYPE_MULTIPLE_SELECTION,
  QUESTION_TYPE_NUMBERS,
  TEMPLATE_QUESTION,
} from 'routes/adminReviews/components/TemplatesForm/TemplatesFormValues'
import Question from 'routes/adminReviews/components/TemplatesForm/Question'
import setQuestionState from 'routes/adminReviews/actions/setQuestionState'
import './templatesForm.scss'
import { pathOr } from 'rambda'
import completeQuestion from 'routes/adminReviews/actions/completeQuestion'
import editQuestion from 'routes/adminReviews/actions/editQuestion'


export const MAX_VARIANTS = 10
export const TEMPLATE_FORM_NAME = 'templatesForm'

const select = formValueSelector(TEMPLATE_FORM_NAME)


const fakeValues = [
  {
    value: 'Very below expectations',
    emoji: 0x1F614,
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F612,
  },
  {
    value: 'Very below expectations',
    emoji: 0x1F616,
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F604,
  },
  {
    value: 'Very below expectations',
    emoji: 0x1F604,
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F604,
  },
  {
    value: 'Very below expectations',
    emoji: 0x1F604,
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F604,
  },
  {
    value: 'Very below expectations',
    emoji: 0x1F604,
  },
  {
    value: 'Moderately below expectations',
    emoji: 0x1F604,
  },

]


export const MakeFakeQuestion = (id) => ({
  _id: id,
  [QUESTION_TYPE_EMOJI]: fakeValues.map(v => ({ value: `emoji-${v.value}`, emoji: v.emoji })),
  [QUESTION_TYPE_NUMBERS]: fakeValues.map(v => ({ value: `numbers-${v.value}` })),
  [QUESTION_TYPE_MULTIPLE_CHOICE]: fakeValues.map(v => ({ value: `choice-${v.value}` })),
  [QUESTION_TYPE_MULTIPLE_SELECTION]: fakeValues.map(v => ({ value: `selection-${v.value}` })),
})


class TemplatesForm extends Component {


  static propTypes = {
    setQuestionState: PropTypes.func.isRequired,
    completeQuestion: PropTypes.func.isRequired,
    editQuestion: PropTypes.func.isRequired,
    reviews: PropTypes.object,
    questionTemplates: PropTypes.array,
  }


  render() {
    const {
      questionTemplates,
      setQuestionState,
      completeQuestion,
      editQuestion,
      reviews
    } = this.props

    const { onEdit } = reviews

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
        questionTemplates={questionTemplates}
        setQuestionState={setQuestionState}
        completeQuestion={completeQuestion}
        editQuestion={editQuestion}
        onEdit={onEdit}
      />
    </div>
  }
}


TemplatesForm.displayName = 'TemplatesForm'


const form = reduxForm({
  form: TEMPLATE_FORM_NAME,
})(TemplatesForm)

export default connect(state => {

  console.log(state.reviews)

  return {
    initialValues: {
      // [TEMPLATE_QUESTION]: [MakeFakeQuestion()],
    },
    reviews: {...state.reviews},
    questionTemplates: select(state, TEMPLATE_QUESTION),
  }
}, { setQuestionState, completeQuestion, editQuestion })(form)
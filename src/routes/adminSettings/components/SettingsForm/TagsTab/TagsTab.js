import React from 'react'
import { connect } from 'react-redux'
import { FieldArray, formValueSelector } from 'redux-form'
import { TAGS_FIELD } from 'routes/adminSettings/components/SettingsForm/inputNames'
import TagLines from 'routes/adminSettings/components/SettingsForm/TagsTab/TagLines'
import './tagstab.scss'


const selector = formValueSelector('adminSettings')


const TagsTab = ({ tags }) => <div className="tags-tab">
  <div className="tags-tab__tags-title">
    <div className="tags-tab__tags-title--column">Team</div>
    <div className="tags-tab__tags-title--column"/>

  </div>
  <FieldArray name={TAGS_FIELD} component={TagLines} tags={tags}/>
</div>


export default connect(state => ({
  tags: selector(state, TAGS_FIELD),
}))(TagsTab)
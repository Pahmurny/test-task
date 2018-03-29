import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FieldArray, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import './tagstab.scss'
import { TAGS_FIELD } from 'routes/adminSettings/components/SettingsForm/inputNames'
import TagLines from 'routes/adminSettings/components/SettingsForm/TagsTab/TagLines'



const selector = formValueSelector('adminSettings')


const TagsTab = ({tags}) => <div className="tags-tab">
    <FieldArray name={TAGS_FIELD} component={TagLines} tags={tags}/>
</div>


export default connect(state => ({
    tags: selector(state, TAGS_FIELD)
}))(TagsTab)
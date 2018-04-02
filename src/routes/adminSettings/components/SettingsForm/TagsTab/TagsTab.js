import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FieldArray, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import './tagstab.scss'
import { TAGS_FIELD } from 'routes/adminSettings/components/SettingsForm/inputNames'
import TagLines from 'routes/adminSettings/components/SettingsForm/TagsTab/TagLines'
import InfoIcon from 'components/Icons/InfoIcon'



const selector = formValueSelector('adminSettings')


const TagsTab = ({tags}) => <div className="tags-tab">
    <div className="tags-tab__tags-title">
        <div className="tags-tab__tags-title--column">Tag</div>
        <div className="tags-tab__tags-title--column">Apply to teams? <InfoIcon className={'info-icon'}/></div>
        <div className="tags-tab__tags-title--column"/>

    </div>
    <FieldArray name={TAGS_FIELD} component={TagLines} tags={tags}/>
</div>


export default connect(state => ({
    tags: selector(state, TAGS_FIELD)
}))(TagsTab)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import TagsField from 'components/Form/TagsField/TagsField'
import PersonalEmail from 'components/Form/PersonalEmail'
import { FormLabel } from 'components/Form/TextField/TextFieldLabel'
import './formtagsfield.scss'


class FormTagsField extends Component {

    onAddPeople = (person) => {
        const { input: { value, onChange }, one } = this.props
        if (one && value.length === 1) {
            return
        }
        delete person.component
        const sPeople = [...value, person]
        onChange(sPeople)

    }

    onDeletePeople = (idx) => {
        const { input: { value, onChange }, one } = this.props
        const values = one ? [value] : value
        values.splice(idx, 1)
        const newPeople = [...values]
        onChange(newPeople)
    }


    render() {
        const { input: { value }, allPeople, style, label, one, placeholder } = this.props

        return (<FormLabel style={style} className={cn('form-tags-field', { one: (one && value.length === 1) })}>
            {label}
            <TagsField
                tags={one && !Array.isArray(value) ? [value] : value}
                suggestions={allPeople.map(person => ({
                    ...person, name: `${person.name}`,
                    component: <PersonalEmail>{person.email}</PersonalEmail>,
                }))}
                placeholder={placeholder}
                onAdd={this.onAddPeople}
                onDelete={this.onDeletePeople}
            />
        </FormLabel>)
    }
}


FormTagsField.propTypes = {
    allPeople: PropTypes.array,
    one: PropTypes.bool,
}

export default FormTagsField
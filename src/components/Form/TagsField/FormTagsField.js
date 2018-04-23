import React from 'react'
import PropTypes from 'prop-types'
import TagsField from 'components/Form/TagsField/TagsField'
import PersonalEmail from 'components/Form/PersonalEmail'


const FormTagsField = ({ input: { value, onChange }, allPeople }) => {


    return (<TagsField
        tags={value || []}
        suggestions={allPeople.map(person => ({
            ...person, name: `${person.name}`,
            component: <PersonalEmail>{person.email}</PersonalEmail>,
        }))}
        onAdd={person => {
            delete person.component
            onChange([...value, person])
        }
        }
        onDelete={idx => {
            value.splice(idx, 1)
            const newV = [...value]
            onChange([])
        }
        }
    />)
}


FormTagsField.propTypes = {
    allPeople: PropTypes.array,
}

export default FormTagsField
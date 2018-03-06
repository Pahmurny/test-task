import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTags from 'react-tag-autocomplete'
import './tagsField.scss'


const classConfig = {
    root: 'tags-field',
    searchInput: 'tags-field__search-input',
    rootFocused: 'is-focused',
    selected: 'tags-field__selected',
    selectedTag: 'tags-field__selected-tag',
    selectedTagName: 'tags-field__selected-tag-name',
    search: 'tags-field__search',
    suggestions: 'tags-field__suggestions',
    suggestionActive: 'is-active',
    suggestionDisabled: 'is-disabled',
}


export default class TagsField extends Component {

    static propTypes = {
        onDelete: PropTypes.func,
        onAdd: PropTypes.func,
        tags: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            name: PropTypes.string.isRequired,
        })),
        suggestions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            name: PropTypes.string.isRequired,
        })),
    }

    handleDelete = (i) => {
        const { onDelete } = this.props
        if (onDelete) {
            onDelete(i)
        }

    }

    handleAddition = (tag) => {
        const { onAdd } = this.props
        if (onAdd) {
            onAdd(tag)
        }
    }

    preformatTag = (tag) => {
        const { name, email } = tag
        if(email){
            const tagName = name.replace(email, '')
            return {...tag, name: tagName}
        }
        return tag
    }

    render() {
        const { tags, suggestions } = this.props
        return (
            <ReactTags
                classNames={classConfig}
                tags={tags.map(this.preformatTag)}
                suggestions={suggestions}
                handleDelete={this.handleDelete}
                handleAddition={this.handleAddition}
                placeholder={''}
            />

        )
    }
}
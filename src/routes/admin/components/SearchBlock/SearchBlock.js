import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './searchblock.scss'
import ExportIcon from 'components/Icons/ExportIcon'
import TagsField from 'components/Form/TagsField/TagsField'
import updateFilter from 'routes/feedback/actions/updateFilter'
import PersonalEmail from 'components/Form/PersonalEmail'

class SearchBlock extends Component {

    static propTypes = {
        updateFilter: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const { loadSuggestions } = this.props
        loadSuggestions()
    }


    handleChangeFullText = (e) => {
        const { target: { value } } = e
        const { updateFilter } = this.props
        updateFilter('fulltextSearch', value)
    }

    onAddPeople = (person) => {
        const { filter: { searchPeople }, updateFilter } = this.props
        delete person.component
        const sPeople = [...searchPeople, person]
        //console.log(sPeople)
        updateFilter('searchPeople', sPeople)

    }

    onDeletePeople = (idx) => {
        const { filter: { searchPeople }, updateFilter } = this.props
        searchPeople.splice(idx, 1)
        const newPeople = [...searchPeople]
        updateFilter('searchPeople', newPeople)
    }

    render() {
        const { filter: { fulltextSearch, searchPeople }, allPeople } = this.props

        return (
            <div className="admin__search-block">
                <input
                    type="text" className="admin__search-block-fulltext"
                    placeholder={'Search for feedback...'}
                    value={fulltextSearch}
                    onChange={this.handleChangeFullText}
                />
                <TagsField
                    tags={searchPeople}
                    suggestions={allPeople.map(person => ({
                        ...person, name: `${person.name}`,
                        component: <PersonalEmail>{person.email}</PersonalEmail>,
                    }))}
                    onAdd={this.onAddPeople}
                    onDelete={this.onDeletePeople}
                />
                <ExportIcon/>
            </div>
        )
    }
}


export default connect(null, { updateFilter })(SearchBlock)

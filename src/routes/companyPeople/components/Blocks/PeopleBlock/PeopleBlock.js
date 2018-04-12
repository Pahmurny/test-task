import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PersonRow from 'routes/companyPeople/components/Blocks/PeopleBlock/PersonRow'
import './peopleblock.scss'

class PeopleBlock extends Component {


    render() {
        const { data } = this.props
        return (
            <div className="people-block">
                <h2 className="people-block__title">Team Members</h2>
                <div>{data.map((person, key) => <PersonRow key={key} {...person}/>)}</div>
            </div>
        )
    }
}


export default PeopleBlock
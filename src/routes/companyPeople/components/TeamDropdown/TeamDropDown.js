import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './teamdropdown.scss'
import DropdownArrow from 'components/Icons/DropdownArrow'


class TeamDropDown extends Component {


    static propTypes = {
        onGetData: PropTypes.func.isRequired,
    }


    onClickHandler = (e) => {
        const { id, onGetData } = this.props
        onGetData(id)
    }


    render() {
        const { name, membersCount } = this.props
        return (
            <div
                className="team-dropdown"
                onClick={this.onClickHandler}
            >
                <div className="team-dropdown__title">
                    <span>{name}</span>
                    <span className="team-dropdown__members-count">{membersCount} members</span>
                    <span><DropdownArrow className='team-dropdown__drop-icon'/></span>
                </div>
            </div>
        )

    }
}


export default TeamDropDown
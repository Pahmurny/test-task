import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './teamdropdown.scss'
import DropdownArrow from 'components/Icons/DropdownArrow'
import PeopleBlock from 'routes/companyPeople/components/Blocks/PeopleBlock/PeopleBlock'


const BlocksView = {
    'people': PeopleBlock,
}


class TeamDropDown extends Component {


    static propTypes = {
        onGetData: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
    }


    onClickHandler = (e) => {
        const { id, onGetData, blocks, onClose } = this.props
        if (blocks) {
            onClose(id)
        } else {
            onGetData(id)
        }
    }

    renderBlocks = () => {
        const { blocks } = this.props
        const allBlocks = []
        for (const block in blocks) {
            if (blocks.hasOwnProperty(block) && BlocksView.hasOwnProperty(block)) {
                const BlockView = BlocksView[block]
                allBlocks.push(<BlockView key={block} data={blocks[block]}/>)
            }
        }
        return allBlocks
    }

    render() {
        const { name, membersCount, blocks } = this.props
        return (
            <div
                className="team-dropdown"
                onClick={this.onClickHandler}
            >
                <div className="team-dropdown__title">
                    <span>{name}</span>
                    <span className="team-dropdown__members-count">{membersCount} members</span>
                    <span><DropdownArrow
                        className='team-dropdown__drop-icon'
                        active={!!blocks}
                    /></span>
                </div>
                {blocks && <div>{this.renderBlocks().map((Block) => Block)}</div>}
            </div>
        )

    }
}


export default TeamDropDown
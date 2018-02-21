import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'
import './dropdown.scss'

let dd

const Drop = ({ items, onClick, activeItem = { id: -1 } }) => <Dropdown ref={dropdown => dd = dropdown}>
    <DropdownTrigger>Dropdown</DropdownTrigger>
    <DropdownContent>
        <ul className={'dropdown-items'}>
            {items.map((item, key) => {
                return <li
                    className={cn('dropdown-item', { active: item.id === activeItem.id })}
                    key={key}
                    onClick={() => {
                        onClick(item)
                        dd.hide()
                    }}
                >{item.title}</li>
            })}
        </ul>
    </DropdownContent>
</Dropdown>


Drop.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func,
    activeItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
    }),
}


export default Drop
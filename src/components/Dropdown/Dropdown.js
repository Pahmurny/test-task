import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'
import './dropdown.scss'

let dd

const GetItem = (items, id, title = 'Select') => {
    const filtered = items.filter(item => item.id === id)
    if (filtered.length > 0) {
        return filtered[0]
    }
    return { title }
}

const Drop = ({ items, onClick, activeItem = { id: -1 }, style }) => <Dropdown style={style} ref={dropdown => dd = dropdown}>
    <DropdownTrigger>{GetItem(items, activeItem.id).title}</DropdownTrigger>
    <DropdownContent>
        <ul className={'dropdown-items'}>
            {items.map((item, key) => {
                return <li
                    className={cn('dropdown-item', { active: item.id === activeItem.id })}
                    key={key}
                    onClick={() => {
                        if (onClick) {
                            onClick(item)
                            dd.hide()
                        }
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
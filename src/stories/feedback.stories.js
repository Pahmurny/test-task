import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DropDown from 'components/Dropdown/Dropdown'


const dropdownItems = (() => {
    const items = []
    for (let i = 1; i <= 6; i++) {
        items.push({
            id: i,
            title: `title ${i}`,
        })
    }
    return items
})()


storiesOf('Feedback', module)
    .add('DropDown', () => <DropDown
        items={dropdownItems}
        onClick={action('Clicked on Item')}
        activeItem={{ id: 2, title: 'some title' }}
    />)
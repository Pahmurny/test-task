import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, withKnobs, date } from '@storybook/addon-knobs/react'
import DropDown from 'components/Dropdown/Dropdown'
import DateFilter from 'components/DateFilter/DateFilter'
import { GetDates } from 'stories/helpers/dates'


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


const SelectDates = GetDates()


const stories = storiesOf('Feedback', module)
stories.addDecorator(withKnobs)
stories.add('DropDown', () => <DropDown
    items={dropdownItems}
    onClick={action('Clicked on Item')}
    activeItem={{ id: number('Active ID', 2), title: 'some title' }}
/>)


stories.add('Date Filter', () => <DateFilter
    activeItem={{
        startDate: date('Selected Date', new Date(SelectDates[0].startDate)),
    }}
    dates={SelectDates}
    onClick={action('clicked on date')}
/>)

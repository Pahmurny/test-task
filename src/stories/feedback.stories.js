import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, withKnobs, date, text, boolean, array } from '@storybook/addon-knobs/react'
import DropDown from 'components/Dropdown/Dropdown'
import DateFilter from 'components/DateFilter/DateFilter'
import { GetDates } from 'stories/helpers/dates'
import DefaultButton from 'components/Buttons/DefaultButton'
import Feedback from 'components/Feedback/Feedback'
import { GenerateFeedbacks } from 'stories/helpers/feedbacks'
import FeedbacksList from 'components/FeedbacksList/FeedbacksList'
import FeedbackType from 'routes/feedback/components/FeedbackType/FeedbackType'
import TagsField from 'components/Form/TagsField/TagsField'
import RoundedBlock from 'components/Shared/RoundedBlock'
import RoundedTopBlock from 'components/Shared/RoundedTopBlock'


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
const defaultDate = new Date()
const feedbacks = GenerateFeedbacks()


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


stories.add('Add Feedback Button', () => <DefaultButton
    onClick={action('Button Clicked')}
>{text('Button Title', '+ Feedback')}</DefaultButton>)

stories.add('Feedback Block', () => <Feedback
    locked={boolean('Private', false)}
    date={date('Date', defaultDate)}
    user={{
        image: text('User Pic', 'http://dev.powersteeringsoftware.com/wp-content/uploads/2013/04/005_McDonald_BrendaLaddPHOTO_5x7SQUARE1-300x300.jpg'),
        name: text('UserName', 'Dinesh Chugtai'),
    }}
    tags={array('Tags', ['teamplayer', 'sometag', 'another tag', 'reactjs'])}
>{text('Feedback Text', 'Thanks for covering for me on running the sprint mtg, I really appreciate it!')}</Feedback>)


stories.add('FeedbacksList', () => <FeedbacksList scrollOptions={{
    width: `${number('Width %', 80)}%`,
    height: `${number('Height px', 300)}px`,
}} feedbacks={feedbacks}/>)

stories.add('Feedback type', () => <FeedbackType items={[
    {
        id: 1,
        title: 'Give feedback',
    },
    {
        id: 2,
        title: 'Give feedback',
    },
    {
        id: 3,
        title: 'Give feedback',
    },
]} activeItem={{ id: 2 }}/>)


stories.add('Tags', () => <RoundedTopBlock>
        <TagsField/>
    </RoundedTopBlock>,
)

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import DefaultButton from 'components/Buttons/DefaultButton'
import PlusButton from 'components/Buttons/PlusButton'
import HashButton from 'components/Buttons/HashButton'
import LogoIcon from 'components/Icons/LogoIcon'


const stories = storiesOf('Buttons', module)
stories.addDecorator(withKnobs)


stories.add('Default Button', () => <DefaultButton
    onClick={action('Button Clicked')}
>{text('Button Title', 'Some Title')}</DefaultButton>)

stories.add('Hash Button', () => <HashButton
    onClick={action('Button Clicked')}
>#{text('Button Title', 'Some Title')}</HashButton>)


stories.add('Plus Button', () => <PlusButton onClick={action('Plus Btn clicked')} style={{
    cursor: 'pointer',
}}/>)

stories.add('Logo Icon', () => <LogoIcon/>)
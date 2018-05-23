import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import DefaultButton from 'components/Buttons/DefaultButton'
import NegativeButton from 'components/Buttons/NegativeButton'
import PlusButton from 'components/Buttons/PlusButton'
import HashButton from 'components/Buttons/HashButton'
import LogoIcon from 'components/Icons/LogoIcon'
import Checkbox from 'components/Form/Checkbox/Checkbox'


const stories = storiesOf('Buttons', module)
stories.addDecorator(withKnobs)


stories.add('Default Button', () => <DefaultButton
    onClick={action('Button Clicked')}
>{text('Button Title', 'Some Title')}</DefaultButton>)

stories.add('Negative Button', () => <NegativeButton
    onClick={action('Button Clicked')}
>{text('Button Title', 'Some Title')}</NegativeButton>)

stories.add('Hash Button', () => <HashButton
    onClick={action('Button Clicked')}
>#{text('Button Title', 'Some Title')}</HashButton>)


stories.add('Plus Button', () => <PlusButton onClick={action('Plus Btn clicked')} style={{
    cursor: 'pointer',
}}/>)

stories.add('Logo Icon', () => <LogoIcon/>)

stories.add('Checkbox', () => <div>
  <Checkbox checked>The self handles freedom which is not simple. <br/> test </Checkbox>
  <Checkbox checked>The self handles freedom which is not simple. <br/> test </Checkbox>
</div>)
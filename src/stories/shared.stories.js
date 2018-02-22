import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import GreyBlock from 'components/Shared/GreyBlock'
import UserPic from 'components/Shared/UserPic'


const userpic = 'http://dev.powersteeringsoftware.com/wp-content/uploads/2013/04/005_McDonald_BrendaLaddPHOTO_5x7SQUARE1-300x300.jpg'

const stories = storiesOf('Shared', module)
stories.addDecorator(withKnobs)


stories.add('Grey Block', () => <GreyBlock>{text('Block Text', 'Some content here')}</GreyBlock>)
stories.add('Userpic', () => <UserPic image={userpic}/>)
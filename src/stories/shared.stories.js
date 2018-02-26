import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs/react'
import { BrowserRouter as Router } from 'react-router-dom'
import GreyBlock from 'components/Shared/GreyBlock'
import UserPic from 'components/Shared/UserPic'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'


const userpic = 'http://dev.powersteeringsoftware.com/wp-content/uploads/2013/04/005_McDonald_BrendaLaddPHOTO_5x7SQUARE1-300x300.jpg'

const stories = storiesOf('Shared', module)
stories.addDecorator(withKnobs)


stories.add('Grey Block', () => <GreyBlock>{text('Block Text', 'Some content here')}</GreyBlock>)
stories.add('Userpic', () => <UserPic image={userpic}/>)
stories.add('Scroll Block', () => <ScrollBlock
    style={{
    width: `${number('Width in percent', 100)}%`,
}}>{text('Fake Test', 'Habena prareres, tanquam rusticus heuretes.' +
    ' The sinner loves. Totality doesn’t sincerely discover any believer —' +
    ' but the body is what travels. Habena prareres, tanquam rusticus heuretes. The sinner ' +
    'loves. Totality doesn’t sincerely discover any believer — but the body is what travels.Habena' +
    ' prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely ' +
    'discover any believer — but the body is what travels.Habena prareres, tanquam rusticus heuretes.' +
    ' The sinner loves. Totality doesn’t sincerely discover any believer — but the body is what travels.' +
    'Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover ' +
    'any believer — but the body is what travels. Habena prareres, tanquam rusticus heuretes. The sinner ' +
    'loves. Totality doesn’t sincerely discover any believer — but the body is what travels.Habena prareres,' +
    ' tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any believer — but ' +
    'the body is what travels.Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t ' +
    'sincerely discover any believer — but the body is what travels.' +
    `Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any
    believer — but the body is what travels. Habena prareres, tanquam rusticus heuretes. The sinner loves.
    Totality doesn’t sincerely discover any believer — but the body is what travels.Habena prareres, tanquam
    rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any believer — but the body is what
     travels.Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any
     believer — but the body is what travels.Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality
      doesn’t sincerely discover any believer — but the body is what travels. Habena prareres, tanquam rusticus heuretes.
       The sinner loves. Totality doesn’t sincerely discover any believer — but the body is what travels.Habena
        prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any believer
         — but the body is what travels.Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality
         doesn’t sincerely discover any believer — but the body is what travels.
         Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any
    believer — but the body is what travels. Habena prareres, tanquam rusticus heuretes. The sinner loves.
    Totality doesn’t sincerely discover any believer — but the body is what travels.Habena prareres, tanquam
    rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any believer — but the body is what
     travels.Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any
     believer — but the body is what travels.Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality
      doesn’t sincerely discover any believer — but the body is what travels. Habena prareres, tanquam rusticus heuretes.
       The sinner loves. Totality doesn’t sincerely discover any believer — but the body is what travels.Habena
        prareres, tanquam rusticus heuretes. The sinner loves. Totality doesn’t sincerely discover any believer
         — but the body is what travels.Habena prareres, tanquam rusticus heuretes. The sinner loves. Totality
         doesn’t sincerely discover any believer — but the body is what travels.`)}</ScrollBlock>)

stories.add('Menu', () => <Router>
    <div style={{
        padding:'5em',
        backgroundColor:'#23182d'
    }}>
        <HeaderMenu/>
    </div>
</Router>)
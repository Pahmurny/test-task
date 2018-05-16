import React from 'react'
import m from 'moment'
import AboutBlock from 'components/Feedback/AboutBlock'
import './note.scss'
import LockIcon2 from 'components/Icons/LockIcon2'

const Note = ({ content, user, date }) => <div className="note-feedback">
  <div className="note-feedback__header">
    <AboutBlock image={user.image} name={user.name} className={'note-feedback__about'}/>
    <div className="note-feedback__date-action">
      <LockIcon2 className={'lock-icon'} fillColor={'#807D83'}/> Private | {m(date).format('MMM DD, YYYY')}
    </div>
  </div>
  <div className="note-feedback__content">
    {content}
  </div>
</div>


export default Note
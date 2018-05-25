import React from 'react'
import m from 'moment'
import AboutBlock from 'components/Feedback/AboutBlock'
import './note.scss'
import LockIcon from 'components/Icons/LockIcon'

const Note = ({ content, user, date }) => <div className="note-feedback">
  <div className="note-feedback__header">
    <AboutBlock image={user.image} name={user.name} className={'note-feedback__about'}/>
    <div className="note-feedback__date-action">
      <LockIcon className={'lock-icon'}/> Private | {m(date).format('MMM DD, YYYY')}
    </div>
  </div>
  <div className="note-feedback__content">
    {content}
  </div>
</div>


export default Note
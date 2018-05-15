import React from 'react'
import FromToFeedback from 'components/Feedback/FromToFeedback'
import { IsDev } from 'helpers/dev'
import './rgfeedback.scss'
import AboutBlock from 'components/Feedback/AboutBlock'


const RGFeedback = (props) => <FromToFeedback
  {...props}
  className={'received-given'}
>
  {props => <div className={'received-given__content'}>
    {(props.question || IsDev()) && <div className="received-given__question">{props.question || 'Request: How’s my transition as a part-time advisor?'}</div>}
    <div style={{marginBottom: 10}}><AboutBlock image={props.user.image} name={props.user.name}/></div>
    {props.content}
  </div>}
</FromToFeedback>


export default RGFeedback
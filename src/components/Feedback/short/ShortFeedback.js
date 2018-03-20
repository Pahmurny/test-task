import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import m from 'moment'
import './shortfeedback.scss'
import UserPic from 'components/Shared/UserPic'
import EditIcon from 'components/Icons/EditIcon'

const NoUser = ({ sign = '&mdash;' }) => <div dangerouslySetInnerHTML={{ __html: sign }}/>


const ShortFeedback = ({ user, to, last, date, requester }) => <div className={cn('short-feedback', { last })}>
    <div className="short-feedback__item">
        <div className="short-feedback__item-date">
            {m(date).format('MMM DD, YYYY')}
            <div className="short-feedback__item-date-time">
                {m(date).format('hh:mm A')}
            </div>
        </div>
    </div>
    <div className="short-feedback__item">
        {!requester ? <NoUser/> : <React.Fragment>
            <UserPic image={requester.user.image}/>
            <div className="short-feedback__item-name">
                {requester.user.name}
            </div>
        </React.Fragment>}
    </div>
    <div className="short-feedback__item">
        {!user ? <NoUser/> : <React.Fragment>
            <UserPic image={user.image}/>
            <div className="short-feedback__item-name">
                {user.name}
            </div>
        </React.Fragment>}
    </div>
    <div className="short-feedback__item">
        {!to ? <NoUser/> : <React.Fragment>
            <UserPic image={to.user.image}/>
            <div className="short-feedback__item-name">
                {to.user.name}
            </div>
        </React.Fragment>}
    </div>

    <div className="short-feedback__item last">
        <EditIcon/>
    </div>
</div>

export default ShortFeedback
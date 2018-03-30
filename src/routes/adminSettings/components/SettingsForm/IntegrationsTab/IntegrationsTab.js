import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RequestButton from 'components/Buttons/RequestButton'
import SlackIcon from 'components/Icons/SlackIcon'
import './integrationstab.scss'

const IntegrationsTab = () => <div className="integrations-tab">
    <h2 className="integrations-tab__title">Slack</h2>
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <div className="integrations-tab__text">
            Send updates posted in CareerLark to your preferred Slack channel.
            Your team doesn’t have to leave Slack to make sure they’re getting the latest info.
        </div>
        <RequestButton style={{
            alignItems:'center',
            display:'flex'
        }}>
            <SlackIcon style={{marginRight: 10}}/>
            Update
        </RequestButton>
    </div>
    <h2 className="integrations-tab__title">Coming soon… more integrations!</h2>
</div>


export default IntegrationsTab
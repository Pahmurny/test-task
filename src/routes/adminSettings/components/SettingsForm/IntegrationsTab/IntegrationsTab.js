import React  from 'react'
import RequestButton from 'components/Buttons/RequestButton'
import SlackIcon from 'components/Icons/SlackIcon'
import './integrationstab.scss'

const IntegrationsTab = () => <div className="integrations-tab">
    <h2 className="integrations-tab__title">Slack</h2>
        <RequestButton className="integrations-tab__request-button">
            <SlackIcon className="integrations-tab__request-button__slack-icon"/>
            Update
        </RequestButton>
        <div className="integrations-tab__text">
            Send updates posted in CareerLark to your preferred Slack channel.
            Your team doesn’t have to leave Slack to make sure they’re getting the latest info.
        </div>
    <h2 className="integrations-tab__title">Coming soon… more integrations!</h2>
</div>


export default IntegrationsTab
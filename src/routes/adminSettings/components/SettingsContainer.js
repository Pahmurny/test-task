import React, { Component } from 'react'
import { connect } from 'react-redux'
import setTeamView from 'routes/team/actions/setTeamView'
import {
    MODULE_VIEW_ADMIN_SETTINGS,
} from 'routes/feedback/feedbackTypes'
import './settingsContainer.scss'
import SettingsForm from 'routes/adminSettings/components/SettingsForm'
import setModuleView from 'actions/setModuleView'
import HalfPage from 'components/Shared/HalfPage'



class SettingsContainer extends Component {


    componentDidMount() {
        const { setModuleView } = this.props
        setModuleView(MODULE_VIEW_ADMIN_SETTINGS)
    }


    render() {
        return <HalfPage className="settings-container">
            <SettingsForm/>
          </HalfPage>
    }
}


export default connect(null, {
    setTeamView,
    setModuleView
})(SettingsContainer)
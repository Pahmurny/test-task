import React, { Component } from 'react'
import { connect } from 'react-redux'
import setTeamView from 'routes/team/actions/setTeamView'
import {
    MODULE_VIEW_ADMIN_SETTINGS,
} from 'routes/feedback/feedbackTypes'
import './settingsContainer.scss'
import SettingsForm from 'routes/adminSettings/components/SettingsForm'
import setModuleView from 'actions/setModuleView'



class SettingsContainer extends Component {


    componentDidMount() {
        const { setModuleView } = this.props
        setModuleView(MODULE_VIEW_ADMIN_SETTINGS)
    }


    render() {
        return <div className="settings-container">
            <h2 className="settings-container__header">Settings</h2>
            <SettingsForm/>
        </div>
    }
}


export default connect(null, {
    setTeamView,
    setModuleView
})(SettingsContainer)
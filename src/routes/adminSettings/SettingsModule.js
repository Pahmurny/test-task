import React, { Component } from 'react'
import store, { injectAsyncReducer, injectSaga } from 'store'


export default class SettingsModule extends Component {


    state = {
        loaded: false,
    }

    async componentDidMount() {
        const { SettingsContainer, feedbackReducer, rootSaga } = await import(/* webpackChunkName: "Settings_Module" */ './module')
        setTimeout(() => {
            this.SettingsContainer = SettingsContainer
            injectAsyncReducer(store, 'feedbacks', feedbackReducer)
            injectSaga(store, 'feedbacksSaga', rootSaga)
            this.setState({ loaded: true })
        }, 0)
    }


    render() {
        const { loaded } = this.state
        const { location } = this.props
        if (!loaded) {
            return null
        }
        const { SettingsContainer } = this
        return <SettingsContainer pathname={location.pathname}/>
    }

}
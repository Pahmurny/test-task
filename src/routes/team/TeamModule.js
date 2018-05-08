import React, { Component } from 'react'
import store, { injectAsyncReducer, injectSaga } from 'store'


export default class TeamModule extends Component {


    state = {
        loaded: false,
    }

    async componentDidMount() {
        const { TeamContainer, feedbackReducer, rootSaga } = await import(/* webpackChunkName: "Team_Module" */ './module')
        setTimeout(() => {
            this.TeamContainer = TeamContainer
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
        const { TeamContainer } = this
        return <TeamContainer pathname={location.pathname}/>
    }

}
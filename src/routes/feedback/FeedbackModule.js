import React, { Component } from 'react'
import PageLoader from 'components/Shared/PageLoader'


export default class FeedbackModule extends Component {


    state = {
        loaded: false,
    }

    async componentDidMount() {
        const { Feedback } = await import(/* webpackChunkName: "Feedback_Index" */ './module')
        this.Feedback = Feedback
        this.setState({ loaded: true })
    }


    render() {
        const { loaded } = this.state
        if (!loaded) {
            return <PageLoader/>
        }
        const { Feedback } = this
        return <Feedback/>
    }

}
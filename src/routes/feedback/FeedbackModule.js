import React, { Component } from 'react'
import PageLoader from 'components/Shared/PageLoader'
import store, { injectAsyncReducer } from 'store'


export default class FeedbackModule extends Component {


    state = {
        loaded: false,
    }

    async componentDidMount() {
        const { Feedback, feedbackReducer } = await import(/* webpackChunkName: "Feedback_Module" */ './module')
        setTimeout(()=>{
            this.Feedback = Feedback
            injectAsyncReducer(store, 'feedbacks', feedbackReducer)
            this.setState({ loaded: true })
        }, 0)
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
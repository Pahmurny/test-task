import React, { Component } from 'react'
import store, { injectAsyncReducer, injectSaga } from 'store'


export default class PeopleModule extends Component {


    state = {
        loaded: false,
    }

    async componentDidMount() {
        const { PeopleContainer, feedbackReducer, peopleReducer,  rootSaga } = await import(/* webpackChunkName: "Company_Module" */ './module')
        setTimeout(() => {
            this.PeopleContainer = PeopleContainer
            injectAsyncReducer(store, 'feedbacks', feedbackReducer)
            injectAsyncReducer(store, 'people', peopleReducer)
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
        const { PeopleContainer } = this
        return <PeopleContainer pathname={location.pathname}/>
    }

}
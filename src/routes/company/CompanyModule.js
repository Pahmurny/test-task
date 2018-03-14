import React, { Component } from 'react'
import store, { injectAsyncReducer, injectSaga } from 'store'


export default class CompanyModule extends Component {


    state = {
        loaded: false,
    }

    async componentDidMount() {
        const { CompanyContainer, feedbackReducer, rootSaga } = await import(/* webpackChunkName: "Company_Module" */ './module')
        setTimeout(() => {
            this.CompanyContainer = CompanyContainer
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
        const { CompanyContainer } = this
        return <CompanyContainer pathname={location.pathname}/>
    }

}
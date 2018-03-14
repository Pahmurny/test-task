import React, { Component } from 'react'
import store, { injectAsyncReducer, injectSaga } from 'store'


export default class AdminModule extends Component {


    state = {
        loaded: false,
    }

    async componentDidMount() {
        const { AdminContainer, feedbackReducer, rootSaga } = await import(/* webpackChunkName: "Admin_Module" */ './module')
        setTimeout(() => {
            this.AdminContainer = AdminContainer
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
        const { AdminContainer } = this
        return <AdminContainer pathname={location.pathname}/>
    }

}
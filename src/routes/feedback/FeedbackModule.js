import React, { Component } from 'react'
import store, { injectAsyncReducer, injectSaga } from 'store'


export default class FeedbackModule extends Component {


  state = {
    loaded: false,
  }

  async componentDidMount() {
    const { Feedback, feedbackReducer, rootSaga } = await import(/* webpackChunkName: "Feedback_Module" */ './module')
    setTimeout(() => {
      this.Feedback = Feedback
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
    const { Feedback } = this
    return <Feedback pathname={location.pathname}/>
  }

}
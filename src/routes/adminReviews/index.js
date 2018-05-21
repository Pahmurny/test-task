import React, { Component } from 'react'
import { connect } from 'react-redux'
import setModuleView from 'actions/setModuleView'
import { MODULE_VIEW_ADMIN_REVIEWS } from 'routes/feedback/feedbackTypes'
import HalfPage from 'components/Shared/HalfPage'


class AdminReviews extends Component {


  componentDidMount() {
    const { setModuleView } = this.props
    setModuleView(MODULE_VIEW_ADMIN_REVIEWS)
  }

  render() {
    return <HalfPage title={'Reviews'}>
      Reviews Page
    </HalfPage>
  }
}


export default connect(null, { setModuleView })(AdminReviews)
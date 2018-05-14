import React, { Component } from 'react'
import initializeFilters from 'routes/feedback/actions/initializeFilters'
import feedbackType from 'routes/feedback/actions/feedbackType'
import { connect } from 'react-redux'
import loadSuggestions from 'routes/feedback/actions/loadSuggestions'
import setDateType from 'routes/feedback/actions/setDateType'
import setDate from 'routes/feedback/actions/setDate'
import toggleModal from 'routes/feedback/actions/toggleModal'
import setFilterFeedbackType from 'routes/feedback/actions/setFilterFeedbackType'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'
import setTeamView from 'routes/team/actions/setTeamView'
import setTeamFeedbackType from 'routes/team/actions/setTeamFeedbackType'
import setFilterFeedbackTo from 'routes/team/actions/setFilterFeedbackTo'
import Page from 'components/Content/Page'
import { MODULE_VIEW_COMPANY } from 'routes/feedback/feedbackTypes'
import FeedbackPage from 'routes/feedback/components/Page/FeedbackPage'
import setModuleView from 'actions/setModuleView'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'


class CompanyContainer extends Component {


  componentDidMount() {
    const { setModuleView } = this.props
    setModuleView(MODULE_VIEW_COMPANY)
    this.initializeFeedback()
  }

  initializeFeedback = () => {
    const { getFeedbacks, initializeFilters, loadSuggestions } = this.props
    initializeFilters()
    getFeedbacks()
    loadSuggestions()
  }


  render = () => <Page flex><FeedbackPage {...this.props} /></Page>
}


export default connect(({ feedbacks: { feedbacks, modalWindow, feedback, filter, feedbackLoading }, common: { moduleView }, companyPeople }) => ({
  feedbacks,
  modalWindow,
  feedback,
  filter,
  feedbackLoading,
  moduleView,
  ...companyPeople,
}), {
  toggleModal,
  feedbackType,
  getFeedbacks,
  initializeFilters,
  setDateType,
  setDate,
  setFilterFeedbackType,
  loadSuggestions,
  setTeamView,
  setTeamFeedbackType,
  setFilterFeedbackTo,
  setModuleView,
  updateCompanyPeopleValue,
})(CompanyContainer)
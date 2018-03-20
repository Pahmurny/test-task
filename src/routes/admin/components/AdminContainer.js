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
import { MODULE_VIEW_ADMIN } from 'routes/feedback/feedbackTypes'
import FeedbackPage from 'routes/feedback/components/Page/FeedbackPage'
import SearchBlock from 'routes/admin/components/SearchBlock/SearchBlock'


class AdminContainer extends Component {

    componentDidMount() {
        const { setTeamView, getFeedbacks, initializeFilters } = this.props
        initializeFilters()
        setTeamView(MODULE_VIEW_ADMIN)
        getFeedbacks()
    }

    render = () => <FeedbackPage {...this.props} beforeBody={props => <SearchBlock {...props}/>} />
}


export default connect(({ feedbacks: { feedbacks, modalWindow, feedback, filter, feedbackLoading, allPeople } }) => ({
    feedbacks,
    modalWindow,
    feedback,
    filter,
    feedbackLoading,
    allPeople
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
})(AdminContainer)
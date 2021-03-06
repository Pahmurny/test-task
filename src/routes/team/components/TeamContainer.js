import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeedbackPage from 'routes/feedback/components/Page/FeedbackPage'
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
import { MODULE_VIEW_TEAM } from 'routes/feedback/feedbackTypes'
import Page from 'components/Content/Page'
import setModuleView from 'actions/setModuleView'


class TeamContainer extends Component {

    static propTypes = {
        toggleModal: PropTypes.func,
        feedbackType: PropTypes.func,
        getFeedbacks: PropTypes.func.isRequired,
        modalWindow: PropTypes.bool.isRequired,
        feedbackLoading: PropTypes.bool.isRequired,
        feedbacks: PropTypes.array,
        feedback: PropTypes.object,
        filter: PropTypes.object,
        initializeFilters: PropTypes.func.isRequired,
        setDateType: PropTypes.func.isRequired,
        setDate: PropTypes.func.isRequired,
        setFilterFeedbackType: PropTypes.func.isRequired,
        loadSuggestions: PropTypes.func.isRequired,
        setTeamView: PropTypes.func.isRequired,
        setModuleView: PropTypes.func.isRequired,
        setTeamFeedbackType: PropTypes.func.isRequired,
        setFilterFeedbackTo: PropTypes.func.isRequired,
    }


    componentDidMount() {
        const { setTeamView, setModuleView } = this.props
        setTeamView(MODULE_VIEW_TEAM)
        setModuleView(MODULE_VIEW_TEAM)
        this.initializeFeedback()

    }

    initializeFeedback = () => {
        const { getFeedbacks, initializeFilters, loadSuggestions } = this.props
        initializeFilters()
        getFeedbacks()
        loadSuggestions()
    }


    render = () => <Page flex><FeedbackPage {...this.props}/></Page>
}


export default connect(({ feedbacks: { feedbacks, modalWindow, feedback, filter, feedbackLoading }, common: { moduleView } }) => ({
    feedbacks,
    modalWindow,
    feedback,
    filter,
    feedbackLoading,
    moduleView
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
    setModuleView
})(TeamContainer)
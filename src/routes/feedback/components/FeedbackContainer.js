import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import toggleModal from 'routes/feedback/actions/toggleModal'
import feedbackType from 'routes/feedback/actions/feedbackType'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'
import initializeFilters from 'routes/feedback/actions/initializeFilters'
import setDateType from 'routes/feedback/actions/setDateType'
import setDate from 'routes/feedback/actions/setDate'
import setFilterFeedbackType from 'routes/feedback/actions/setFilterFeedbackType'
import loadSuggestions from 'routes/feedback/actions/loadSuggestions'
import FeedbackPage from 'routes/feedback/components/Page/FeedbackPage'
import { MODULE_VIEW_FEEDBACK } from 'routes/feedback/feedbackTypes'
import setTeamView from 'routes/team/actions/setTeamView'
import Page from 'components/Content/Page'
import setModuleView from 'actions/setModuleView'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'



class FeedbackContainer extends Component {


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
    }

    componentDidMount() {
        this.initializeFeedback()
    }

    initializeFeedback = () => {
        const { getFeedbacks, initializeFilters, loadSuggestions, setTeamView, setModuleView } = this.props
        initializeFilters()
        getFeedbacks()
        loadSuggestions()
        setTeamView(MODULE_VIEW_FEEDBACK)
        setModuleView(MODULE_VIEW_FEEDBACK)
    }

    render() {
        return (
            <Page flex><FeedbackPage {...this.props} /></Page>
        )
    }
}


export default connect(({ feedbacks: { feedbacks, modalWindow, feedback, filter, feedbackLoading }, common: { moduleView }, companyPeople }) => ({
    feedbacks,
    modalWindow,
    feedback,
    filter,
    feedbackLoading,
    moduleView,
    ...companyPeople
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
    setModuleView,
    updateCompanyPeopleValue
})(FeedbackContainer)
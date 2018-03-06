import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import dim from 'get-node-dimensions'
import Page from 'components/Content/Page'
import PageTitle from 'components/Shared/PageTitle'
import DefaultButton from 'components/Buttons/DefaultButton'
import FeedbacksList from 'components/FeedbacksList/FeedbacksList'
import './feedback.scss'
import Dropdown from 'components/Dropdown/Dropdown'
import DateFilter from 'components/DateFilter/DateFilter'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import Modal from 'components/Shared/Modal'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import toggleModal from 'routes/feedback/actions/toggleModal'
import { CLOSE_MODAL, OPEN_MODAL } from 'routes/feedback/feedbackReducer'
import feedbackType from 'routes/feedback/actions/feedbackType'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'
import initializeFilters from 'routes/feedback/actions/initializeFilters'
import setDateType from 'routes/feedback/actions/setDateType'
import setDate from 'routes/feedback/actions/setDate'
import PageLoader from 'components/Shared/PageLoader'
import setFilterFeedbackType from 'routes/feedback/actions/setFilterFeedbackType'
import loadSuggestions from 'routes/feedback/actions/loadSuggestions'


const DateFilterItems = [
    { id: 0, title: 'Weekly' },
    { id: 1, title: 'Every Two weeks' },
    { id: 2, title: 'Monthly' },
    { id: 3, title: 'Quarterly' },
]


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
    }

    state = {
        listHeight: 0,
    }

    componentDidMount() {
        const { getFeedbacks, initializeFilters, loadSuggestions } = this.props
        setTimeout(() => {
            this.calculateListHeight()
        }, 0)
        initializeFilters()
        getFeedbacks()
        loadSuggestions()

        window.addEventListener('resize', this.onResize, false)
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize, false)
    }

    calculateListHeight = () => {
        const { height: listHeight } = dim(this.feedbackContent)
        this.setState({ listHeight })
    }


    onResize = () => {
        this.calculateListHeight()
    }

    render() {
        const { listHeight } = this.state
        const {
            feedbacks,
            toggleModal,
            modalWindow,
            feedback,
            feedbackType,
            filter,
            setDateType,
            setDate,
            feedbackLoading,
            setFilterFeedbackType
        } = this.props

        const { dates, selectedDate, dateType, feedbackTypes, feedbackType:ft } = filter

        return (
            <Page flex>
                <PageTitle>
                    Feedback
                </PageTitle>
                <div className="feedback-body">
                    <div className="feedback-body__sidebar">
                        <Dropdown
                            items={DateFilterItems}
                            onClick={(item) => setDateType(item.id)}
                            activeItem={{ id: dateType }}
                        />
                        <ScrollBlock style={{ height: listHeight }}>
                            <div className="filtered-dates">
                                <DateFilter
                                    dates={dates}
                                    activeItem={selectedDate}
                                    onClick={setDate}
                                />
                            </div>
                        </ScrollBlock>
                    </div>
                    <div className="feedback-body__content">
                        <div className="feedback-body__actions">
                            <Dropdown
                                items={feedbackTypes}
                                activeItem={ft}
                                onClick={setFilterFeedbackType}
                            />
                            {/* <Dropdown
                                style={{ marginLeft: 10, minWidth: 170 }}
                                items={[
                                    {
                                        id: 1,
                                        title: `Team member received`,
                                    },
                                    {
                                        id: 2,
                                        title: `Team member given`,
                                    },
                                    {
                                        id: 3,
                                        title: `Note to self`,
                                    },

                                ]}/>*/}
                            <DefaultButton
                                style={{
                                    marginLeft: 'auto',
                                }}
                                onClick={() => toggleModal(OPEN_MODAL)}>
                                + Feedback
                            </DefaultButton>
                        </div>
                        <div className="feedback-body__list"
                             ref={feedbackContent => this.feedbackContent = feedbackContent}
                        >
                            {feedbackLoading && <PageLoader/>}
                            {!feedbackLoading && <FeedbacksList
                                scrollOptions={{ height: listHeight - 10 }}
                                feedbacks={feedbacks}
                            />}
                        </div>
                    </div>
                </div>
                {modalWindow && <Modal closeForm={() => toggleModal(CLOSE_MODAL)}>
                    <FeedbackForm
                        feedBack={feedback} onClose={toggleModal}
                        onChangeType={feedbackType}
                    />
                </Modal>}
            </Page>
        )
    }
}


export default connect(({ feedbacks: { feedbacks, modalWindow, feedback, filter, feedbackLoading } }) => ({
    feedbacks,
    modalWindow,
    feedback,
    filter,
    feedbackLoading,
}), {
    toggleModal,
    feedbackType,
    getFeedbacks,
    initializeFilters,
    setDateType,
    setDate,
    setFilterFeedbackType,
    loadSuggestions
})(FeedbackContainer)
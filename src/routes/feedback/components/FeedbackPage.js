import React from 'react'
import PropTypes from 'prop-types'
import { CLOSE_MODAL, OPEN_MODAL } from 'routes/feedback/feedbackReducer'
import Page from 'components/Content/Page'
import { PageTitle } from 'components/Shared/PageTitle'
import DefaultButton from 'components/Buttons/DefaultButton'
import Modal from 'components/Shared/Modal'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import PageLoader from 'components/Shared/PageLoader'
import FeedbacksList from 'components/FeedbacksList/FeedbacksList'
import Dropdown from 'components/Dropdown/Dropdown'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import DateFilter from 'components/DateFilter/DateFilter'
import './feedback.scss'


const DateFilterItems = [
    { id: 0, title: 'Weekly' },
    { id: 1, title: 'Every Two weeks' },
    { id: 2, title: 'Monthly' },
    { id: 3, title: 'Quarterly' },
]


const FeedbackPage = ({
                          feedbacks,
                          toggleModal,
                          modalWindow,
                          feedback,
                          feedbackType,
                          filter,
                          setDateType,
                          setDate,
                          feedbackLoading,
                          setFilterFeedbackType, isTeamView,
                          setTeamFeedbackType,
                      }) => {

    const { dates, selectedDate, dateType, feedbackTypes, feedbackType: ft, teamTypes, teamType } = filter

    return <Page flex>
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
                <ScrollBlock style={{ minHeight: 0 }}>
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
                    {isTeamView && <Dropdown
                        style={{ marginLeft: 10, minWidth: 190 }}
                        activeItem={teamType}
                        onClick={setTeamFeedbackType}
                        items={teamTypes}/>}
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
                        scrollOptions={{ minHeight: 10 }}
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
}


FeedbackPage.propTypes = {
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
    isTeamView: PropTypes.bool,
}


export default FeedbackPage
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { CLOSE_MODAL, OPEN_MODAL } from 'routes/feedback/feedbackReducer'
import { PageTitle } from 'components/Shared/PageTitle'
import DefaultButton from 'components/Buttons/DefaultButton'
import Modal from 'components/Shared/Modal'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import PageLoader from 'components/Shared/PageLoader'
import FeedbacksList from 'components/FeedbacksList/FeedbacksList'
import Dropdown from 'components/Dropdown/Dropdown'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import DateFilter from 'components/DateFilter/DateFilter'
import { dropdownViews, titles } from 'routes/feedback/components/Page/pageView'
import { MODULE_VIEW_ADMIN } from 'routes/feedback/feedbackTypes'
import AdminFeedbackList from 'components/FeedbacksList/admin/AdminFeedbackList'
import '../feedback.scss'
import FeedbackType from 'routes/feedback/components/FeedbackType/FeedbackType'
import FeedbackRequest from 'routes/feedback/components/FeedbackForm/FeedbackRequest'
import Note from 'routes/feedback/components/FeedbackForm/Note'
import FeedbackGive from 'routes/feedback/components/FeedbackForm/FeedbackGive'
import { PopupTitle } from 'components/Shared/PopupTitle'
import CompanyInfo from 'routes/companyPeople/components/Company/CompanyInfo'
import ValuesBlock from 'routes/companyPeople/components/Company/ValuesBlock'



const DateFilterItems = [
    { id: 0, title: 'Weekly' },
    { id: 1, title: 'Every two weeks' },
    { id: 2, title: 'Monthly' },
    { id: 3, title: 'Quarterly' },
    { id: 4, title: 'Semi-annual' },
]

export const feedbackViews = {
  0: <FeedbackGive/>,
  1: <FeedbackRequest/>,
  2: <Note/>,
}

const ListView = {
    [MODULE_VIEW_ADMIN]: AdminFeedbackList
}


const FeedbackPage = (props) => {


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
        beforeBody,
        moduleView,
        company,
        companyValues,
        showValues,
        updateCompanyPeopleValue
    } = props
    const { dates, selectedDate, dateType } = filter
    const ListComponent = ListView[moduleView] || FeedbacksList

    return <React.Fragment>
        <PageTitle>
            {titles[moduleView]}
        </PageTitle>
        {beforeBody && beforeBody(props)}
        <div className={cn('feedback-body', moduleView)}>
            <div className="feedback-body__sidebar">
                <Dropdown
                    items={DateFilterItems}
                    onClick={(item) => setDateType(item.id)}
                    activeItem={{ id: dateType }}
                />
                <ScrollBlock style={{ minHeight: 0, maxHeight: '90%' }}>
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
                    {dropdownViews[moduleView] && dropdownViews[moduleView]({ ...props, filter })}
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
                    {!feedbackLoading && <ListComponent
                        scrollOptions={{ minHeight: 10 }}
                        feedbacks={feedbacks}
                    />}
                </div>
            </div>
        </div>
        {(modalWindow && !showValues) && <Modal closeForm={() => toggleModal(CLOSE_MODAL)}>
            <FeedbackForm
                feedBack={feedback}
                onClose={toggleModal}
                onChangeType={feedbackType}
            >
              <div className="feedback-form__actions">
                <FeedbackType
                    items={[
                      {
                        id: 0,
                        title: 'Give feedback',
                      },
                      {
                        id: 1,
                        title: 'Request feedback',
                      },
                      {
                        id: 2,
                        title: 'Note to Self',
                      },
                    ]}
                    activeItem={{ id: feedback.type }}
                    onChange={feedbackType}
                />
              </div>
              <div className="feedback-form__view">
                <ScrollBlock style={{ height: 500 }}>
                  {feedbackViews[feedback.type]}
                </ScrollBlock>
              </div>
            </FeedbackForm>
        </Modal>}
        {showValues && <Modal closeForm={() => updateCompanyPeopleValue('showValues', false)}>
            <FeedbackForm
                onClose={() => updateCompanyPeopleValue('showValues', false)}
                title={<PopupTitle>Company Profile</PopupTitle>}
                style={{
                    width: 672,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <CompanyInfo {...company}/>
                <ValuesBlock values={companyValues}/>
            </FeedbackForm>
        </Modal>}
    </React.Fragment>
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
    beforeBody: PropTypes.func,
    isTeamView: PropTypes.bool,
}


export default FeedbackPage
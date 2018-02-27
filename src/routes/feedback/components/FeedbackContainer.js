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


class FeedbackContainer extends Component {


    static propTypes = {
        toggleModal: PropTypes.func,
        feedbackType: PropTypes.func,
        modalWindow: PropTypes.bool.isRequired,
        feedbacks: PropTypes.array,
        feedback: PropTypes.object,
    }

    state = {
        listHeight: 0,
    }

    componentDidMount() {
        setTimeout(() => {
            this.calculateListHeight()
        }, 0)

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
            feedbacks, toggleModal, modalWindow,
            feedback,
            feedbackType,
        } = this.props
        return (
            <Page flex>
                <PageTitle>
                    Feedback
                </PageTitle>
                <div className="feedback-body">
                    <div className="feedback-body__sidebar">
                        <Dropdown items={[{ id: 1, title: 'some' }]}/>
                        <ScrollBlock style={{ height: listHeight }}>
                            <div className="filtered-dates">
                                <DateFilter dates={[
                                    {
                                        startDate: '2018-08-26T00:55:06.576Z',
                                        endDate: '2018-08-26T00:55:06.576Z',
                                    },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                    { startDate: '2018-08-26T00:55:06.576Z', endDate: '2018-08-26T00:55:06.576Z' },
                                ]}/>
                            </div>
                        </ScrollBlock>
                    </div>
                    <div className="feedback-body__content">
                        <div className="feedback-body__actions">
                            <Dropdown items={[
                                {
                                    id: 1,
                                    title: `You've received`,
                                },
                                {
                                    id: 2,
                                    title: `You've given`,
                                },
                                {
                                    id: 3,
                                    title: `Note to self`,
                                },

                            ]}/>
                            <Dropdown
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

                                ]}/>
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
                            <FeedbacksList
                                scrollOptions={{ height: listHeight - 10 }}
                                feedbacks={feedbacks}
                            />
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


export default connect(({ feedbacks: { feedbacks, modalWindow, feedback } }) => ({
    feedbacks,
    modalWindow,
    feedback,
}), { toggleModal, feedbackType })(FeedbackContainer)
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


class FeedbackContainer extends Component {


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
        const { feedbacks } = this.props
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
                                <DateFilter dates={[{ startDate: '111', endDate: '222' },
                                    {
                                        startDate: '111',
                                        endDate: '222',
                                    },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                    { startDate: '111', endDate: '222' },
                                ]}/>
                            </div>
                        </ScrollBlock>
                    </div>
                    <div className="feedback-body__content">
                        <div className="feedback-body__actions">
                            <DefaultButton>
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
            </Page>
        )
    }
}


export default connect(({ feedbacks: { feedbacks } }) => ({ feedbacks }))(FeedbackContainer)
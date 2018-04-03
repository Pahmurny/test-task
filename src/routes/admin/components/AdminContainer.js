import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
import Modal from 'components/Shared/Modal'
import setValue from 'routes/feedback/actions/setValue'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import FromToTitle from 'routes/admin/components/FromToTitle/FromToTitle'
import FeedbackData from 'routes/admin/components/FeedbackData/FeedbackData'
import { PageTitle } from 'components/Shared/PageTitle'
import { ScaleLoader } from 'react-spinners'
import AdminSettings from 'routes/admin/components/AdminSettings/AdminSettings'
import Page from 'components/Content/Page'
import setModuleView from 'actions/setModuleView'


class AdminContainer extends PureComponent {

    static propTypes = {
        setValue: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const { getFeedbacks, initializeFilters, setModuleView } = this.props
        initializeFilters()
        setModuleView(MODULE_VIEW_ADMIN)
        getFeedbacks()
    }

    render() {
        const { feedbackInfo, setValue, showAdminSettings, savingAdminSettings } = this.props

        return (
            <React.Fragment>
                <Page flex>
                    <FeedbackPage {...this.props} beforeBody={props => <SearchBlock {...props}/>}/>

                    {feedbackInfo && <Modal closeForm={() => setValue('feedbackInfo', false)}>
                        <FeedbackForm
                            onClose={() => setValue('feedbackInfo', false)}
                            title={<FromToTitle {...feedbackInfo}/>}
                            style={{ minHeight: 50 }}
                        >
                            <FeedbackData feedbackInfo={feedbackInfo}/>
                        </FeedbackForm>
                    </Modal>}

                    {showAdminSettings && <Modal closeForm={() => setValue('showAdminSettings', false)}>
                        <FeedbackForm
                            onClose={() => setValue('showAdminSettings', false)}
                            title={<PageTitle
                                style={{ display: 'flex', alignItems: 'center' }}>Settings {savingAdminSettings &&
                            <ScaleLoader height={15}/>}</PageTitle>}
                            style={{ minHeight: 50 }}
                        >
                            <AdminSettings/>
                        </FeedbackForm>
                    </Modal>}
                </Page>
            </React.Fragment>
        )
    }
}


export default connect(({
                            feedbacks: {
                                feedbacks, modalWindow, feedback, filter, feedbackLoading, allPeople,
                                feedbackInfo, showAdminSettings, adminSettings,
                                savingAdminSettings,
                            },
                        }) => ({
    feedbacks,
    modalWindow,
    feedback,
    filter,
    feedbackLoading,
    allPeople,
    feedbackInfo,
    showAdminSettings,
    adminSettings,
    savingAdminSettings,
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
    setValue,
    setModuleView
})(AdminContainer)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { pathOr } from 'rambda'
import { connect } from 'react-redux'
import setModuleView from 'actions/setModuleView'
import { MODULE_VIEW_COMPANY_PEOPLE } from 'routes/feedback/feedbackTypes'
import Page from 'components/Content/Page'
import { feedbackViews } from 'routes/feedback/components/Page/FeedbackPage'
import { PageTitle } from 'components/Shared/PageTitle'
import { PopupTitle } from 'components/Shared/PopupTitle'
import ThreeDotsIcon from 'components/Icons/ThreeDotsIcon'
import getTeams from 'routes/companyPeople/actions/getTeams'
import './companypeople.scss'
import ToggleButton from 'components/Buttons/ToggleButton'
import DropdownContainer from 'routes/companyPeople/components/DropdownContainer/DropdownContainer'
import TeamDropDown from 'routes/companyPeople/components/TeamDropdown/TeamDropDown'
import PeopleList from 'routes/companyPeople/components/PeopleList/PeopleList'
import getTagsData from 'routes/companyPeople/actions/getTagsData'
import updateTeamValue from 'routes/companyPeople/actions/updateTeamValue'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import PageLoader from 'components/Shared/PageLoader'
import getCompanyValues from 'routes/companyPeople/actions/getCompanyValues'
import Modal from 'components/Shared/Modal'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'
import CompanyInfo from 'routes/companyPeople/components/Company/CompanyInfo'
import ValuesBlock from 'routes/companyPeople/components/Company/ValuesBlock'
import { CLOSE_MODAL } from 'routes/feedback/feedbackReducer'
import toggleModal from 'routes/feedback/actions/toggleModal'
import feedbackType from 'routes/feedback/actions/feedbackType'
import FeedbackType from 'routes/feedback/components/FeedbackType/FeedbackType'
import PerPage from 'components/PerPage/PerPage'
import { PageArrowLeft, PageArrowRight } from 'components/Icons/PageArrow'
import getCompanyPeople from 'routes/companyPeople/actions/getCompanyPeople'
import clearFeedback from 'routes/feedback/actions/clearFeedback'


/**
 *  Company People container
 *  Shows information about people of a company
 */
class CompanyPeople extends Component {

    static propTypes = {
        getTagsData: PropTypes.func,
        getTeams: PropTypes.func,
        updateTeamValue: PropTypes.func,
        getCompanyValues: PropTypes.func,
        getCompanyPeople: PropTypes.func,
        updateCompanyPeopleValue: PropTypes.func,
        clearFeedback: PropTypes.func,

    }

    /**
     * Initial component state
     * @type {{viewTab: number}}
     */
    state = {
        viewTab: 0,
    }

    /**
     * Will be invoked when component has been rendered
     */
    componentDidMount() {
        const { setModuleView, getTeams, getCompanyValues, clearFeedback } = this.props
        setModuleView(MODULE_VIEW_COMPANY_PEOPLE)
        getTeams()
        getCompanyValues()
        clearFeedback()
    }

    /**
     * Gets title and fills it by the Company Name if exists
     * @returns string
     */
    companyTitle = () => {
        return pathOr('--', ['company', 'name'], this.props)
    }

    /**
     * Updates store by putting false for id/block value
     * @param id
     */
    onCloseTag = (id) => {
        const { updateTeamValue } = this.props
        updateTeamValue(id, 'blocks', false)
    }

    /**
     *  Updating store by setting false for showValues (means closes popup with company values)
     */
    onCloseValues = () => {
        const { updateCompanyPeopleValue } = this.props
        updateCompanyPeopleValue('showValues', false)
    }

    onCloseModal = () => {
        const { toggleModal, clearFeedback } = this.props
        toggleModal(CLOSE_MODAL)
        clearFeedback()
    }

    /**
     * Selector for pagination values
     * @returns {{totalCount: string, pageCount: string, currentPage: string, perPage: string}}
     */
    getPagination = () => {
        const pageCount = pathOr(0, ['people', 'pageCount'], this.props)
        const totalCount = pathOr(0, ['people', 'totalCount'], this.props)
        const currentPage = pathOr(0, ['people', 'currentPage'], this.props)
        const perPage = pathOr(0, ['people', 'perPage'], this.props)

        return { totalCount, pageCount, currentPage, perPage }
    }


    /**
     * Render the component
     * @returns {any}
     */
    render() {
        const { viewTab } = this.state
        const {
            getTagsData, loadingTeams, showValues, updateCompanyPeopleValue, company,
            companyValues,
            modalWindow,
            toggleModal,
            feedbackType,
            feedback,
            getCompanyPeople,
        } = this.props


        const { totalCount, pageCount, currentPage, perPage } = this.getPagination()

        return <Page flex className={'company-people'}>
            <PageTitle className={'company-people__title'}>
                People at {this.companyTitle()} <ThreeDotsIcon style={{ paddingLeft: 12 }}
                onClick={() => updateCompanyPeopleValue('showValues', true)}/>
            </PageTitle>

            <div className="company-people__search-tabs">
                {viewTab === 1 && <Field
                    className={'company-people__search-name'}
                    component={'input'}
                    type={'text'}
                    name={'person-name'}
                    placeholder={'Type a team member’s name…'}
                    onChange={getCompanyPeople}
                />}

                <div className={'company-people__tabs-btns'}>
                    <ToggleButton
                        active={viewTab === 0}
                        onClick={() => this.setState({ viewTab: 0 })}
                        className={'company-people__btn-tab'}
                    >Team</ToggleButton>
                    <ToggleButton
                        active={viewTab === 1}
                        onClick={() => this.setState({ viewTab: 1 })}
                        className={'company-people__btn-tab'}
                    >People</ToggleButton>
                </div>
            </div>

            {showValues && <Modal closeForm={this.onCloseValues}>
                <FeedbackForm
                    onClose={this.onCloseValues}
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


            {loadingTeams ? <PageLoader/> : <React.Fragment>

                <div className="company-people__content">
                    <ScrollBlock style={{ minHeight: 10 }}>
                        <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                            {(viewTab === 0) && <DropdownContainer>
                                {pathOr([], ['company', 'teams'], this.props).map((team, key) =>
                                    <TeamDropDown
                                        key={key}
                                        {...team}
                                        onGetData={getTagsData}
                                        onClose={this.onCloseTag}
                                    />)}
                            </DropdownContainer>}

                            {(viewTab === 1) && <PeopleList/>}
                        </div>
                    </ScrollBlock>

                </div>
                {(viewTab === 1) && <div className="company-people__pagination">
                    <Field
                        component={PerPage}
                        name={'perpage'}
                        options={[10, 20, 50, 100]}
                        onChange={getCompanyPeople}
                    />
                    <div className="company-people__pagination-block">
                        {(currentPage - 1) * perPage + 1} - {(currentPage - 1) * perPage + perPage} of {totalCount}
                        <PageArrowLeft
                            active={currentPage > 1}
                            className="company-people__pagination-block-btn"
                            onClick={() => (currentPage > 1) && getCompanyPeople(currentPage - 1)}
                        />
                        <PageArrowRight
                            active={currentPage < pageCount}
                            onClick={() => (currentPage < pageCount) && getCompanyPeople(currentPage + 1)}
                            className="company-people__pagination-block-btn"
                        />
                    </div>
                </div>}
            </React.Fragment>}

            {modalWindow && <Modal closeForm={this.onCloseModal}>
                <FeedbackForm
                    feedBack={feedback}
                    onClose={this.onCloseModal}
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
        </Page>
    }
}


/**
 * Creation of a Redux form
 */
const rForm = reduxForm({
    form: 'companyPeople',
})(CompanyPeople)

/**
 * Connection with Redux store
 */
export default connect(({ companyPeople, feedbacks: { feedbacks, modalWindow, feedback, filter, feedbackLoading } }) => ({
        ...companyPeople,
        feedbacks, modalWindow, feedback, filter, feedbackLoading,
    }),
    {
        setModuleView,
        getTeams,
        getTagsData,
        updateTeamValue,
        getCompanyValues,
        updateCompanyPeopleValue,
        toggleModal,
        feedbackType,
        getCompanyPeople,
        clearFeedback
    })(rForm)
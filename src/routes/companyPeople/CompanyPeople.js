import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { pathOr } from 'rambda'
import { connect } from 'react-redux'
import setModuleView from 'actions/setModuleView'
import { MODULE_VIEW_COMPANY_PEOPLE } from 'routes/feedback/feedbackTypes'
import Page from 'components/Content/Page'
import FeedbackPage, { feedbackViews } from 'routes/feedback/components/Page/FeedbackPage'
import PageHeader from 'components/Shared/PageHeader'
import { PageTitle } from 'components/Shared/PageTitle'
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


class CompanyPeople extends Component {

    static propTypes = {
        getTagsData: PropTypes.func,
        getTeams: PropTypes.func,
        updateTeamValue: PropTypes.func,
        getCompanyValues: PropTypes.func,
    }


    state = {
        viewTab: 0,
    }

    componentDidMount() {
        const { setModuleView, getTeams, getCompanyValues } = this.props
        setModuleView(MODULE_VIEW_COMPANY_PEOPLE)
        getTeams()
        getCompanyValues()
    }


    companyTitle = () => {
        return pathOr('--', ['company', 'name'], this.props)
    }


    onCloseTag = (id) => {
        const { updateTeamValue } = this.props
        updateTeamValue(id, 'blocks', false)
    }

    onCloseValues = () => {
        const { updateCompanyPeopleValue } = this.props
        updateCompanyPeopleValue('showValues', false)
    }

    render() {
        const { viewTab } = this.state
        const {
            getTagsData, loadingTeams, showValues, updateCompanyPeopleValue, company,
            companyValues,
            modalWindow,
            toggleModal,
            feedbackType,
            feedback
        } = this.props

        return <Page flex className={'company-people'}>
            <PageTitle className={'company-people__title'}>
                People at {this.companyTitle()} <ThreeDotsIcon
                onClick={() => updateCompanyPeopleValue('showValues', true)}/>
            </PageTitle>

            <div className="company-people__search-tabs">
                <Field
                    className={'company-people__search-name'}
                    component={'input'}
                    type={'text'}
                    name={'person-name'}
                    placeholder={'Type a team member’s name…'}
                />

                <div className={'tabs-btns'}>
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
                    title={<PageTitle>Company Profile</PageTitle>}
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
                {(viewTab === 1) && <div style={{ height: 50, flex: '0 0 50px' }}>
                    Pagination
                </div>}
            </React.Fragment>}

            {modalWindow && <Modal closeForm={() => toggleModal(CLOSE_MODAL)}>
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
        </Page>
    }
}


const rForm = reduxForm({
    form: 'companyPeople',
})(CompanyPeople)

export default connect(({ companyPeople, feedbacks: { feedbacks, modalWindow, feedback, filter, feedbackLoading } }) => ({
        ...companyPeople,
        feedbacks, modalWindow, feedback, filter, feedbackLoading,
    }),
    {
        setModuleView, getTeams, getTagsData,
        updateTeamValue,
        getCompanyValues,
        updateCompanyPeopleValue,
        toggleModal,
        feedbackType
    })(rForm)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { pathOr } from 'rambda'
import { connect } from 'react-redux'
import setModuleView from 'actions/setModuleView'
import { MODULE_VIEW_COMPANY_PEOPLE } from 'routes/feedback/feedbackTypes'
import Page from 'components/Content/Page'
import FeedbackPage from 'routes/feedback/components/Page/FeedbackPage'
import PageHeader from 'components/Shared/PageHeader'
import { PageTitle } from 'components/Shared/PageTitle'
import ThreeDotsIcon from 'components/Icons/ThreeDotsIcon'
import getTeams from 'routes/companyPeople/actions/getTeams'
import './companypeople.scss'
import ToggleButton from 'components/Buttons/ToggleButton'
import DropdownContainer from 'routes/companyPeople/components/DropdownContainer/DropdownContainer'
import TeamDropDown from 'routes/companyPeople/components/TeamDropdown/TeamDropDown'
import getTeamPeople from 'routes/companyPeople/actions/getTeamPeople'
import PeopleList from 'routes/companyPeople/components/PeopleList/PeopleList'


class CompanyPeople extends Component {


    state = {
        viewTab: 0,
    }

    componentDidMount() {
        const { setModuleView, getTeams } = this.props
        setModuleView(MODULE_VIEW_COMPANY_PEOPLE)
        getTeams()

    }


    companyTitle = () => {
        return pathOr('--', ['company', 'name'], this.props)
    }

    render() {
        const { viewTab } = this.state
        const { getTeamPeople } = this.props

        return <Page flex className={'company-people'}>
            <PageTitle className={'company-people__title'}>
                People at {this.companyTitle()} <ThreeDotsIcon/>
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


            <div className="company-people__content">
                {(viewTab === 0) && <DropdownContainer>
                    {pathOr([], ['company', 'teams'], this.props).map((team, key) =>
                        <TeamDropDown
                            key={key}
                            {...team}
                            onGetData={getTeamPeople}
                        />)}
                </DropdownContainer>}

                {(viewTab === 1) && <PeopleList/>}
            </div>
        </Page>
    }
}


const rForm = reduxForm({
    form: 'companyPeople',
})(CompanyPeople)

export default connect(({ companyPeople }) => ({ ...companyPeople }), { setModuleView, getTeams, getTeamPeople })(rForm)
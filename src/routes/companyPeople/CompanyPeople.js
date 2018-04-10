import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import setModuleView from 'actions/setModuleView'
import { MODULE_VIEW_COMPANY_PEOPLE } from 'routes/feedback/feedbackTypes'
import Page from 'components/Content/Page'
import FeedbackPage from 'routes/feedback/components/Page/FeedbackPage'
import PageHeader from 'components/Shared/PageHeader'
import { PageTitle } from 'components/Shared/PageTitle'
import ThreeDotsIcon from 'components/Icons/ThreeDotsIcon'


class CompanyPeople extends Component {

    componentDidMount() {
        const { setModuleView } = this.props
        setModuleView(MODULE_VIEW_COMPANY_PEOPLE)
    }


    render() {
        return <Page flex>
            <PageTitle>
                asdsasd <ThreeDotsIcon/>
            </PageTitle>
        </Page>
    }
}


export default connect(null, { setModuleView })(CompanyPeople)
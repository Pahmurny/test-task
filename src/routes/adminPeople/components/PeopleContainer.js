import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from 'components/Content/Page'
import setTeamView from 'routes/team/actions/setTeamView'
import { MODULE_VIEW_ADMIN_PEOPLE } from 'routes/feedback/feedbackTypes'
import { PageTitle } from 'components/Shared/PageTitle'
import PeopleList from 'routes/adminPeople/components/PeopleList/PeopleList'
import getPeople from 'routes/adminPeople/actions/getPeople'
import setModuleView from 'actions/setModuleView'


class PeopleContainer extends Component {


    componentDidMount() {
        const { getPeople, setModuleView } = this.props
        getPeople()
        setModuleView(MODULE_VIEW_ADMIN_PEOPLE)
    }


    render = () => <Page flex>
        <PageTitle>People</PageTitle>
        <PeopleList/>
    </Page>
}


export default connect(null, { getPeople, setModuleView })(PeopleContainer)
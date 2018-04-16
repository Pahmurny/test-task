import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Page from 'components/Content/Page'
import { MODULE_VIEW_ADMIN_PEOPLE } from 'routes/feedback/feedbackTypes'
import { PageTitle } from 'components/Shared/PageTitle'
import PeopleList from 'routes/adminPeople/components/PeopleList/PeopleList'
import getPeople from 'routes/adminPeople/actions/getPeople'
import setModuleView from 'actions/setModuleView'
import getTags from 'actions/getTags'
import getManagers from 'actions/getManagers'


class PeopleContainer extends Component {

    static propTypes = {
        getTags: PropTypes.func,
        getManagers: PropTypes.func
    }

    componentDidMount() {
        const { getPeople, setModuleView, getTags, getManagers } = this.props
        getPeople()
        getTags()
        getManagers()
        setModuleView(MODULE_VIEW_ADMIN_PEOPLE)
    }


    render = () => <Page flex>
        <PageTitle>People</PageTitle>
        <PeopleList/>
    </Page>
}


/**
 * Connect with store and actions
 */
export default connect(null, { getPeople, setModuleView, getTags, getManagers })(PeopleContainer)
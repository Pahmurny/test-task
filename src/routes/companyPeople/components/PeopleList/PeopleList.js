import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './companypeoplelist.scss'
import getCompanyPeople from 'routes/companyPeople/actions/getCompanyPeople'
import PeopleListRow from 'routes/companyPeople/components/PeopleList/PeopleListRow'
import PageLoader from 'components/Shared/PageLoader'


class PeopleList extends Component {


    static propTypes = {
        getCompanyPeople: PropTypes.func.isRequired,
    }


    componentDidMount() {
        const { getCompanyPeople } = this.props
        getCompanyPeople()
    }

    getPeople = () => {
        const { people } = this.props
        return people || []
    }

    render() {
        const { loadingPeople } = this.props
        const people = this.getPeople()
        if (loadingPeople) {
            return <PageLoader/>
        }
        return (<div className="company-people-list">
            <div className="company-people-list__header">
                <div className="company-people-list__col">
                    Employee
                </div>
                <div className="company-people-list__col">
                    Title
                </div>
                <div className="company-people-list__col">
                    Team
                </div>
                <div className="company-people-list__col"/>
            </div>
            {
                people.map((person, key) => <PeopleListRow key={key} {...person}/>)
            }
        </div>)
    }
}


export default connect(({ companyPeople }) => ({ ...companyPeople }), { getCompanyPeople })(PeopleList)
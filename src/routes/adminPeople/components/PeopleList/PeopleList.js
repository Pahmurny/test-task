import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NotificationManager as Nm } from 'react-notifications'
import { connect } from 'react-redux'
import './peoplelist.scss'
import PeopleRow from 'routes/adminPeople/components/PeopleList/PeopleRow'
import PageLoader from 'components/Shared/PageLoader'
import UserPic from 'components/Shared/UserPic'
import EditIcon from 'components/Icons/EditIcon'


class PeopleList extends Component {


    renderPeopleGrid = () => {
        const { people, loadingPeople } = this.props

        if (loadingPeople || !people) {
            return <PageLoader/>
        }

        return (<div className="people-list__grid">
            {people.map((person, key) => <PeopleRow key={key}>
                <div className="people-list__col">
                    <UserPic image={person.image}/>
                    <span style={{ marginLeft: 10 }}>{person.name}</span>
                </div>
                <div className="people-list__col">
                    {person.title}
                </div>
                <div className="people-list__col">{
                    person.manager ? <React.Fragment>
                        <UserPic image={person.manager.image}/>
                        <span style={{ marginLeft: 10 }}>{person.manager.name}</span>
                    </React.Fragment> : 'N/A'
                }</div>
                <div className="people-list__col">
                    <span style={{ flex: 1 }}>{person.team ? person.team.join(', ') : 'N/A'}</span>
                    <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <EditIcon
                                className={'people-list__edit-btn'}
                                onClick={() => {
                                    if (key % 2) {
                                        Nm.error('Error example')
                                    } else {
                                        Nm.info('Info example')
                                    }

                                }}
                            />
                    </span>
                </div>
            </PeopleRow>)}
        </div>)
    }

    render() {
        const { people } = this.props

        return (
            <div className="people-list">
                <div className="people-list__filter">
                    filter here
                </div>

                <div className="people-list__title">
                    <div className="people-list__col">
                        Employee
                    </div>
                    <div className="people-list__col">
                        Title
                    </div>
                    <div className="people-list__col">
                        Manager
                    </div>
                    <div className="people-list__col">
                        Team
                    </div>
                </div>

                {this.renderPeopleGrid()}
            </div>
        )
    }
}


export default connect(({ people }) => ({ ...people }))(PeopleList)
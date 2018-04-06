import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NotificationManager as Nm } from 'react-notifications'
import { connect } from 'react-redux'
import { CircleLoader } from 'react-spinners'
import './peoplelist.scss'
import PeopleRow from 'routes/adminPeople/components/PeopleList/PeopleRow'
import PageLoader from 'components/Shared/PageLoader'
import UserPic from 'components/Shared/UserPic'
import EditIcon from 'components/Icons/EditIcon'
import { Field, reduxForm, submit } from 'redux-form'
import handleChangeAction from 'routes/adminPeople/actions/handleChangeAction'
import CheckboxField from 'components/Form/Checkbox/CheckboxField'
import DefaultButton from 'components/Buttons/DefaultButton'
import updatePeopleValue from 'routes/adminPeople/actions/updatePeopleValue'
import Modal from 'components/Shared/Modal'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import { PageTitle } from 'components/Shared/PageTitle'
import getUser from 'routes/adminPeople/actions/getUser'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import MemberForm from 'routes/adminPeople/components/MemberForm/MemberForm'


class PeopleList extends Component {


    static propTypes = {
        handleChangeAction: PropTypes.func.isRequired,
        updatePeopleValue: PropTypes.func.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    renderPeopleGrid = () => {
        const { people, loadingPeople, getUser, userForm, loadingPerson } = this.props

        if (loadingPeople || !people) {
            return <PageLoader/>
        }

        return (<div className="people-list__grid">
            {people.map((person, key) => <PeopleRow key={key}>
                <div className="people-list__col">
                    <UserPic image={person.image}/>
                    <span style={{ marginLeft: 10 }}>{person.name}</span>
                    {person.isAdmin && <span className="people-list__admin-badge">Admin</span>}
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
                    <span style={{ flex: 1 }}>{person.team_tags ? person.team_tags.map(t => t.label).join(', ') : 'N/A'}</span>
                    <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        {(person.id === userForm && loadingPerson) && <CircleLoader/> }
                            <EditIcon
                                className={'people-list__edit-btn'}
                                onClick={() => getUser(person.id)}
                            />
                    </span>
                </div>
            </PeopleRow>)}
        </div>)
    }

    formKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    }

    onFilterChange = (e) => {
        const { handleChangeAction } = this.props
        setTimeout(handleChangeAction)
    }

    render() {
        const { memberData, updatePeopleValue } = this.props

        return (
            <div className="people-list">
                <div className="people-list__filter">
                    <form
                        onKeyPress={this.formKeyPress}
                        onChange={this.onFilterChange}
                        className="people-list__form"
                    >
                        <Field
                            component={'input'}
                            name={'name_like'}

                            className="people-list__full-text-search"
                            placeholder={'Type a team member’s name…'}
                        />
                        <div className="csv">
                            <Field
                                component={CheckboxField}
                                name={'active'}
                                className={'active-checkbox'}
                                onChange={this.onFilterChange}
                            />
                            Active only
                            <DefaultButton
                                className="download-btn"
                            >Upload CSV</DefaultButton>
                        </div>
                    </form>
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
                {memberData && <Modal closeForm={() => updatePeopleValue('memberData', undefined)}>
                    <FeedbackForm
                        onClose={() => updatePeopleValue('memberData', undefined)}
                        title={<PageTitle>{memberData.name}</PageTitle>}
                        style={{
                            minHeight: 0
                        }}
                    >
                       <MemberForm/>
                    </FeedbackForm>
                </Modal>}
            </div>
        )
    }
}


const formedList = reduxForm({
    form: 'peoplelist',
})(PeopleList)


export default connect(({ people }) => ({ ...people }), { handleChangeAction, updatePeopleValue, getUser })(formedList)
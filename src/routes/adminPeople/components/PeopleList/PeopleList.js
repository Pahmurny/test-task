import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CircleLoader } from 'react-spinners'
import PeopleRow from 'routes/adminPeople/components/PeopleList/PeopleRow'
import PageLoader from 'components/Shared/PageLoader'
import UserPic from 'components/Shared/UserPic'
import EditIcon from 'components/Icons/EditIcon'
import { Field, reduxForm, change } from 'redux-form'
import handleChangeAction from 'routes/adminPeople/actions/handleChangeAction'
import CheckboxField from 'components/Form/Checkbox/CheckboxField'
import DefaultButton from 'components/Buttons/DefaultButton'
import updatePeopleValue from 'routes/adminPeople/actions/updatePeopleValue'
import Modal from 'components/Shared/Modal'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import { PopupTitle } from 'components/Shared/PopupTitle'
import getUser from 'routes/adminPeople/actions/getUser'
import MemberForm from 'routes/adminPeople/components/MemberForm/MemberForm'
import UploadForm from 'routes/adminPeople/components/UploadForm/UploadForm'
import DeactivateWindow from 'routes/adminPeople/components/DeactivateWindow/DeactivateWindow'
import './peoplelist.scss'


const formName = 'peoplelist'


/**
 *  List of people for admin module
 *
 */
class PeopleList extends Component {


    static propTypes = {
        handleChangeAction: PropTypes.func.isRequired,
        updatePeopleValue: PropTypes.func.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    /**
     * Render list
     * @returns {*}
     */
    renderPeopleGrid = () => {
        const { people, loadingPeople, getUser, userForm, loadingPerson } = this.props

        if (loadingPeople || !people) {
            return <PageLoader/>
        }

        return (<div className="people-list__grid">
            {people.map((person, key) => <PeopleRow key={key}>
                <div className="people-list__col">
                    <UserPic image={person.image}/>
                    <span className="people-list__col__full-name">{`${person.first_name} ${person.last_name}`}</span>
                    {person.isAdmin && <span className="people-list__admin-badge">Admin</span>}
                </div>
                <div className="people-list__col">
                    {person.title}
                </div>
                <div className="people-list__col">{
                    person.manager ? <React.Fragment>
                        <UserPic image={person.manager.image}/>
                        <span className="people-list__col__manager-name">{person.manager.name}</span>
                    </React.Fragment> : 'N/A'
                }</div>
                <div className="people-list__col-team">
                    <span className="people-list__col-team__tags">{person.team_tags ? person.team_tags.map(t => t.label).join(', ') : 'N/A'}</span>
                </div>
                <div>
                 <span className="people-list__span">
                        {(person.id === userForm && loadingPerson) && <CircleLoader/>}
                        <EditIcon
                            className={'people-list__span__edit-btn'}
                            onClick={() => getUser(person.id)}
                        />
                    </span>
                </div>
            </PeopleRow>)}
        </div>)
    }

    /**
     * Disbale form submit by pressing Enter Key
     * @param e
     */
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
        const { memberData, updatePeopleValue, uploadForm, deactivateMember, changeField } = this.props

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
                                onClick={() => updatePeopleValue('uploadForm', true)}
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
                {uploadForm && <Modal closeForm={() => updatePeopleValue('uploadForm', false)}>
                    <FeedbackForm
                        title={<PopupTitle>Upload your employees</PopupTitle>}
                        onClose={() => updatePeopleValue('uploadForm', false)}
                        //style={{ minHeight: 0, width: 577 }}
                    >
                        <UploadForm/>
                    </FeedbackForm>
                </Modal>}

                {memberData &&
                <Modal
                    closeForm={() => !deactivateMember && updatePeopleValue('memberData', undefined)}>
                    <div style={{ opacity: deactivateMember ? 0 : 1 }}>
                        <FeedbackForm
                            onClose={() => !deactivateMember && updatePeopleValue('memberData', undefined)}
                            title={<PopupTitle>{memberData.name}</PopupTitle>}
                            /*style={{
                                minHeight: 0,
                            }}*/
                        >
                            <MemberForm/>
                        </FeedbackForm>
                    </div>
                </Modal>
                }
                {deactivateMember && <Modal closeForm={() => updatePeopleValue('deactivateMember', undefined)}>
                    <FeedbackForm
                        onClose={() => updatePeopleValue('deactivateMember', undefined)}
                        title={<PopupTitle>Deactivate {deactivateMember.name}</PopupTitle>}
                        /*style={{
                            minHeight: 0,
                            width: 576,
                        }}*/
                    >
                        <DeactivateWindow
                            manager={deactivateMember}
                            onCancel={() => updatePeopleValue('deactivateMember', undefined)}
                            onDeactivate={() => {
                                updatePeopleValue('deactivateMember', undefined)
                                changeField('memberForm', 'active', false)
                            }}
                        />
                    </FeedbackForm>
                </Modal>}
            </div>
        )
    }
}


/**
 * Create Redux Form
 */
const formedList = reduxForm({
    form: formName,
})(PeopleList)

/**
 * Connect with store and actions
 */
export default connect(({ people }) => ({ ...people }), {
    handleChangeAction,
    updatePeopleValue,
    getUser,
    changeField: change,
})(formedList)
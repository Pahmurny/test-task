import { pathOr } from 'rambda'
import updateCompanyPeopleValue from 'routes/companyPeople/actions/updateCompanyPeopleValue'

const updateTeamValue = (id, key, value, dispatch, { companyPeople }) => {
    const { company } = companyPeople
    const teams = pathOr([], ['company', 'teams'], companyPeople)



    const updatedTeams = teams.map(team => {
        if (team.id === id) {
            return { ...team, [key]: value }
        }
        return team
    })

    const updatedCompany = {...company, teams: updatedTeams}

    dispatch(updateCompanyPeopleValue('company', updatedCompany))
}


export default (id, key, value) => (dispatch, getState) => updateTeamValue(id, key, value, dispatch, getState())
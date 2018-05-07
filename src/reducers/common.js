import { createReducer } from 'redux-create-reducer'


export const SET_MODULE_VIEW = 'Common.SET_MODULE_VIEW'
export const SET_COMMON_VALUE = 'Common.SET_COMMON_VALUE'

const initialState = {
  user: {
    id: 1,
    name: 'John Doe',
    companyId: 1,
  },
  showUserProfile: {
    id: 2,
    name: 'Jena Oberbrunner',
    phone_number: '650-555-8014',
    preferred_name: 'Jena',
    job_title: 'Head of Biz Dev',
    email: 'jena@fake.com',
    first_name: 'Jena',
    last_name: 'Oberbrunner',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/frankiefreesbie/128.jpg',
    title: 'CEO',
    managerId: 8,
    team_tags: [
      {
        label: 'Engineering',
        value: 'Engineering',
      },
      {
        label: 'Project Babel',
        value: 'Project Babel',
      },
    ],
    active: true,
    isAdmin: true,
    companyId: 1,
  },
}


export default createReducer(initialState, {
  [SET_MODULE_VIEW](state, { moduleView }) {
    return { ...state, moduleView }
  },
  [SET_COMMON_VALUE](state, { key, value }) {
    return { ...state, [key]: value }
  },
})


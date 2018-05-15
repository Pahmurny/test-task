import { createReducer } from 'redux-create-reducer'


export const SET_MODULE_VIEW = 'Common.SET_MODULE_VIEW'
export const SET_COMMON_VALUE = 'Common.SET_COMMON_VALUE'

const initialState = {
  user: {
    id: 1,
    name: 'John Doe',
    companyId: 1,
  },
  /*showUserProfile: {
    id: 1,
    name: 'Nia Leuschke',
    preferred_name: 'Nia',
    first_name: 'Nia',
    job_title: 'Head of Biz Dev',
    start_date: 1517773110,
    phone_number: '650-555-8014',
    last_name: 'Leuschke',
    email: 'nia@fake.com',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/taybenlor/128.jpg',
    title: 'CEO',
    team_tags: [
      {
        label: 'Project Babel',
        value: 'Project Babel'
      },
      {
        label: 'Project Title',
        value: 'Project Title'
      },
      {
        label: 'Paris',
        value: 'paris'
      }
    ],
    active: true,
    isAdmin: true,
    companyId: 1,
    managerId: 8
  }*/
}


export default createReducer(initialState, {
  [SET_MODULE_VIEW](state, { moduleView }) {
    return { ...state, moduleView }
  },
  [SET_COMMON_VALUE](state, { key, value }) {
    return { ...state, [key]: value }
  },
})


const { protocol, hostname } = document.location
const DEFAULT_PORT = 3004

export const ENDPOINT_URL = `${process.env.REACT_APP_ENDPOINT_URL || `${protocol}//${hostname}:${DEFAULT_PORT}`}`

export const url = {
  main: () => '/',
  team: () => '/team',
  company: () => '/company',
  companyPeople: () => '/company/people',
  admin: () => '/admin',
  adminSettings: () => '/admin/settings',
  adminPeople: () => '/admin/people',
  adminReviews: () => '/admin/reviews',
  login: () => '/login',
  signup: () => '/sign-up'
}


export const endpoint = {
  feedbacks: () => `${ENDPOINT_URL}/feedbacks`,
  pending: () => `${ENDPOINT_URL}/pending`,
  people: () => `${ENDPOINT_URL}/people`,
  peoples: () => `${ENDPOINT_URL}/peoples`,
  admin: () => `${ENDPOINT_URL}/admin`,
  tags: () => `${ENDPOINT_URL}/tags`,
  teams: () => `${ENDPOINT_URL}/teams`,
  managers: () => `${ENDPOINT_URL}/managers`,
  companies: () => `${ENDPOINT_URL}/companies`,
  searchPeople: () => `${ENDPOINT_URL}/search_people`,
}
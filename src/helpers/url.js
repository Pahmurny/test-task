const { protocol, hostname } = document.location
const DEFAULT_PORT = 3004

export const ENDPOINT_URL = `${process.env.REACT_APP_ENDPOINT_URL || `${protocol}//${hostname}:${DEFAULT_PORT}`}`

export const url = {
    main: () => '/',
    team: () => '/team',
    company: () => '/company',
    admin: () => '/admin',
    adminSettings: () => '/admin/settings'
}


export const endpoint = {
    feedbacks: () => `${ENDPOINT_URL}/feedbacks`,
    pending: () => `${ENDPOINT_URL}/pending`,
    people: () => `${ENDPOINT_URL}/people`,
    admin: () => `${ENDPOINT_URL}/admin`,

}
import faker from 'faker'
import moment from 'moment'

export const GetDates = () => {
    const dates = []
    const weeks = []
    for (let i = 1; i <= 150; i++) {
        const date = moment(faker.date.future(0, new Date()))
        const week = date.week()
        if (!weeks.includes(week)) {
            weeks.push(week)
            dates.push(date.toISOString())
        }
    }

    dates.sort((a, b) => {
        const aa = new Date(a)
        const bb = new Date(b)

        if (aa !== bb) {
            if (aa > bb) {
                return 1
            }
            if (aa < bb) {
                return -1
            }
        }
        return aa - bb
    })

    return dates.map(date => ({
        startDate: moment(date).startOf('week').toISOString(),
        endDate: moment(date).endOf('week').toISOString(),
    }))
}


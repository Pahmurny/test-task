import m from 'moment'
import chunk from 'lodash/chunk'

const yearNumber = m().format('YYYY')
const yearJan = year => `${year}-01-01`

/**
 * Get weekly periods
 * @param year
 * @returns {Array}
 * @constructor
 */
export const WeeklyDates = (year = yearNumber) => {
    const sFirstOfJanuary = yearJan(year)
    const weeksInYear = m(sFirstOfJanuary).weeksInYear()
    const dates = []
    for (let week = 1; week <= weeksInYear; week++) {
        const weekDate = m(sFirstOfJanuary).week(week)
        dates.push({
            startDate: weekDate.startOf('week').format('YYYY-MM-DD'),
            endDate: weekDate.endOf('week').format('YYYY-MM-DD'),
        })
    }


    return dates
}


/**
 * Get Two week periods
 * @param year
 * @returns {Array}
 * @constructor
 */
export const TwoWeeksDates = (year = yearNumber) => {
    const sFirstOfJanuary = yearJan(year)
    const weeksInYear = m(sFirstOfJanuary).weeksInYear()
    const dates = []
    for (let week = 1; week <= weeksInYear; week += 2) {
        const startWeekDate = m(sFirstOfJanuary).week(week)
        const endWeekDate = m(sFirstOfJanuary).week(week + 1)

        dates.push({
            startDate: startWeekDate.startOf('week').format('YYYY-MM-DD'),
            endDate: endWeekDate.endOf('week').format('YYYY-MM-DD'),
        })
    }

    return dates
}


/**
 * Get Months of a Year
 * @param year
 * @returns {Array}
 * @constructor
 */
export const MonthlyDates = (year = yearNumber) => {
    const dates = []
    const sFirstOfJanuary = yearJan(year)
    for(let month = 0; month<=11;month++){
        dates.push({
            startDate: m(sFirstOfJanuary).month(month).startOf('month').format('YYYY-MM-DD'),
            endDate: m(sFirstOfJanuary).month(month).endOf('month').format('YYYY-MM-DD')
        })
    }
    return dates
}

/**
 * Get Quarters for a Year
 * @param year
 * @returns {any[]}
 * @constructor
 */
export const Quarters = (year = yearNumber)=> {
    const months = MonthlyDates(year)
    const quarters = chunk(months, 4)
    return  quarters.map(q => {
        return {
            startDate: q[0].startDate,
            endDate: q[3].endDate
        }
    })
}
import { MonthlyDates, Quarters, SemiYear, TwoWeeksDates, WeeklyDates } from 'helpers/dates'
import getFeedbacks from 'routes/feedback/actions/getFeedbacks'
import setFilter from 'routes/feedback/actions/setFilter'

const DatesHelpers = [
    WeeklyDates,
    TwoWeeksDates,
    MonthlyDates,
    Quarters,
    SemiYear
]

const setDateType = (dateType, dispatch) => {
    const dates = [...DatesHelpers[dateType](), ...DatesHelpers[dateType](2017)]

    dispatch(setFilter({ dateType, dates, selectedDate: dates[0] }))
    dispatch(getFeedbacks())
}

export default (type = 0) => dispatch => setDateType(type, dispatch)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import m from 'moment'
import cn from 'classnames'
import './dateFilter.scss'
import PlusButton from 'components/Buttons/PlusButton'


const PAGE_SIZE = 20
const SHOW_ALL_TEXT = 'Show all'

export default class DateFilter extends Component {

    static propTypes = {
        dates: PropTypes.arrayOf(PropTypes.shape({
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
        })),
        activeItem: PropTypes.shape({
            startDate: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]).isRequired,
        }),
        onClick: PropTypes.func,
        moreText: PropTypes.string,
    }

    static defaultProps = {
        activeItem: { startDate: -1 },
        moreText: `Show ${PAGE_SIZE} more`,
    }

    state = {
        page: 1,
    }


    get Dates() {
        const { page } = this.state
        const { dates } = this.props

        return dates.slice(0, page * PAGE_SIZE)
    }


    get toShow() {
        const { page } = this.state
        return page * PAGE_SIZE
    }

    get isMore() {
        const { dates } = this.props
        const { page } = this.state
        return (dates.length - this.toShow) >= PAGE_SIZE
    }

    renderMoreBtn = () => {
        const { dates, moreText } = this.props
        if (dates.length <= this.toShow) {
            return null
        }
        let text = moreText
        if (!this.isMore) {
            text = SHOW_ALL_TEXT
        }
        return <div className="show-more" onClick={() => this.setState(state => ({ page: state.page + 1 }))}>
            <PlusButton style={{ marginRight: 6 }}/>
            {text}
        </div>
    }

    render() {
        const { activeItem, onClick } = this.props
        const moreBtn = this.renderMoreBtn()
        return (
            <div className="date-filter">
                <ul className="date-filter__container">
                    {
                        this.Dates.map((data, key) => {
                            const { startDate, endDate } = data
                            return <li
                                key={key}
                                onClick={() => onClick && onClick(data)}
                                className={cn('date-filter__container-item', { active: m(activeItem.startDate).toISOString() === m(startDate).toISOString() })}>
                                {m(startDate).format('MMM DD')} - {m(endDate).format('MMM DD')}
                            </li>
                        })
                    }
                </ul>
                {moreBtn && <div className="more-block">
                    {moreBtn}
                </div>}
            </div>
        )
    }
}

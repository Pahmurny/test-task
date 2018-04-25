import React, { Component } from 'react'
import TimezonePicker from 'react-timezone'
import cn from 'classnames'
import './timezone.scss'


class TimezoneField extends Component {

    state = {
        isActive: false,
    }

    opened = false

    componentDidMount() {
        this.checker = setInterval(this.check, 10)
    }

    componentWillUnmount() {
        clearInterval(this.checker)
    }

    check = () => {
        if (this.picker) {
            const { state: { open } } = this.picker
            if (this.opened !== open) {
                this.opened = open
                this.status = this.opened
            }
        }
    }

    set status(isActive) {
        this.setState({ isActive })
    }

    render() {
        const { isActive } = this.state
        const { input: { value, onChange } } = this.props
        return (
            <div className={cn('select-timezone', { isActive })}>
                <TimezonePicker
                    ref={picker => this.picker = picker}
                    value={value}
                    onChange={timezone => onChange(timezone)}
                />
            </div>
        )
    }
}


export default TimezoneField

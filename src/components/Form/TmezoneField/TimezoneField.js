import React, { Component } from 'react'
import TimezonePicker from 'react-timezone'
import cn from 'classnames'
import './timezone.scss'


class TimezoneField extends Component {

    state = {
        isActive: false,
    }

    componentDidMount(){

       // document.addEventListener('click')

    }



    render() {
        const { isActive } = this.state
        const { input: { value, onChange } } = this.props
        return (
            <div className={cn('select-timezone', { isActive })}>
                <TimezonePicker
                    value={value}
                    onChange={timezone => onChange(timezone)}
                />
            </div>
        )
    }
}


export default TimezoneField

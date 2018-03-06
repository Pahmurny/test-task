import React, { Component } from 'react'
import cn from 'classnames'
import './withFocus.scss'

const withFocus = (WrappedComponent) => {
    return class WithFocus extends Component {

        state = {
            active: false,
        }

        componentDidMount() {
            document.addEventListener('mouseup', this.mouseClick, false)
        }

        componentWillUnmount() {
            document.removeEventListener('mouseup', this.mouseClick, false)
        }

        mouseClick = (e) => {
            console.log(e)
            if (this.div && !this.div.contains(e.target)) {
                this.setState({ active: false })
            }
        }

        setActive = () => {
            this.setState({ active: true })
        }

        render() {
            const { active } = this.state
            return <div
                className={cn('focus-area', { focused: active })}
                ref={div => this.div = div}
                onClick={this.setActive}>
                <WrappedComponent {...this.props} className={'focus-area__wrapped'}/>
            </div>
        }
    }
}


export default withFocus
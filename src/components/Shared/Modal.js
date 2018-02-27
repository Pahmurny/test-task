import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'
import Fade from 'components/Shared/Fade'



 export default class Modal extends Component {


    static propTypes = {
        closeForm: PropTypes.func,
        children: PropTypes.any,
    }

    componentDidMount() {
        window.addEventListener('keyup', this.onKeyPress, false)
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.onKeyPress, false)
    }

    onKeyPress = (e) => {
        const { closeForm } = this.props
        const { keyCode } = e
        if (keyCode === 27 && closeForm) {
            closeForm()
        }
    }

    render() {
        const { children } = this.props

        return <Portal>
            <Fade/>
            {children}
        </Portal>
    }
}

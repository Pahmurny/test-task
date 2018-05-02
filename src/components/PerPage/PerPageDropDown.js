import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './perpagedropdown.scss'
import Shevron from 'components/Icons/Shevron'


class PerPageDropDown extends Component {

  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
  }

  state = {
    isOpen: false,
  }


  componentDidMount() {
    document.addEventListener('click', this.onAnyClick, false)

  }


  componentWillUnmount() {
    document.removeEventListener('click', this.onAnyClick, false)
  }


  onAnyClick = (e) => {
    const { isOpen } = this.state
    if (isOpen && this.dropdown && !e.target.contains(this.dropdown)) {
      this.open(false)
    }
  }

  onClick = (value) => {
    const { onChange } = this.props
    onChange(value)
  }

  open = (isOpen = true) => {
    this.setState({ isOpen })
  }

  render() {
    const { value, options } = this.props
    const { isOpen } = this.state

    return (
      <div className="perpage-dropdown" ref={dropdown => this.dropdown = dropdown}>
        <div className="perpage-dropdown__current" onClick={(e) => {
          e.stopPropagation()
          setTimeout(this.open)
        }
        }>{value} <Shevron/></div>
        <div className={cn('perpage-dropdown__options', { isOpen })}>
          {options.map((option, key) => <div
            key={key}
            onClick={() => this.onClick(option)}
            className={cn('perpage-dropdown__option', { current: option === value })}
          >{option}</div>)}
        </div>
      </div>
    )
  }
}


export default PerPageDropDown
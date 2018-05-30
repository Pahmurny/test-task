import React, { Component } from 'react'
import Dropdown, { DropdownContent, DropdownTrigger } from 'react-simple-dropdown'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {
  QUESTION_TYPE_EMOJI,
  QUESTION_TYPE_MULTIPLE_CHOICE,
  QUESTION_TYPE_MULTIPLE_SELECTION,
  QUESTION_TYPE_NUMBERS,
  QUESTION_TYPE_WRITE,
} from 'routes/adminReviews/components/TemplatesForm/TemplatesFormValues'


/**
 * Emojis example
 * @type {number[]}
 */
const emojis = [0x1F61E, 0x1F60A, 0x1F60D]

const types = {
  [QUESTION_TYPE_EMOJI]: `Rating (${emojis.map(e => String.fromCodePoint(e)).join('')})`,
  [QUESTION_TYPE_NUMBERS]: 'Rating (1, 2, 3...)',
  [QUESTION_TYPE_MULTIPLE_CHOICE]: 'Multiple choice',
  [QUESTION_TYPE_MULTIPLE_SELECTION]: 'Multiple selection',
  [QUESTION_TYPE_WRITE]: 'Write-in',
}


/**
 * Placeholder text
 * @type {string}
 */
const DEFAULT_VALUE = 'Select response type…'


class TypeDropdown extends Component {


  state = {
    isActive: false,
  }

  renderItems() {
    const { input: { onChange } } = this.props
    const items = [<div
      key={'blank_e'} className={'dropdown-item'} dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
      onClick={() => {
        if (onChange) {
          this.DropDownRef.hide()
          onChange(null)
        }
      }
      }
    />]
    Object.keys(types).forEach(type => {
      items.push(<div onClick={() => {
        if (onChange) {
          this.DropDownRef.hide()
          onChange(type)
        }
      }} key={type} className={'dropdown-item'}>{types[type]}</div>)
    })
    return items
  }

  render() {
    const { input: { value } } = this.props
    const { isActive } = this.state

    return <Dropdown
      onShow={() => this.setState({ isActive: true })}
      onHide={() => this.setState({ isActive: false })}
      ref={dropdown => this.DropDownRef = dropdown}
      className={'type-dropdown'}
    >
      <DropdownTrigger
        className={cn({ isActive })}
      >
        {types[value] ? types[value] : DEFAULT_VALUE}
      </DropdownTrigger>
      <DropdownContent>
        <div className={'dropdown-items'}>{this.renderItems()}</div>
      </DropdownContent>
    </Dropdown>
  }
}


TypeDropdown.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func,
  }),
}


export default TypeDropdown
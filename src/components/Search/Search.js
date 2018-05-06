import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import SearchIcon from 'components/Icons/SearchIcon'
import './searchcomponent.scss'
import searchPeople from 'actions/searchPeople'
import UserPic from 'components/Shared/UserPic'

/**
 * Classes to check click outside
 *
 * @type {string[]}
 */
const validClasses = [
  'search-component',
  'search-component__search-container',
  'search-component__input-field',
  'search-component__results',
  'search-component__section-title',
  'search-component__people-result',
  'search-component__people-result-person',
  'search-component__people-result-person-picture',
  'search-component__people-result-person-name',
]

const form = 'search'


/**
 *  Search component
 */
class Search extends Component {


  state = {
    active: false,
  }

  static propTypes = {
    searchPeople: PropTypes.func,
    foundPeople: PropTypes.array,
  }


  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp, false)
    document.addEventListener('click', this.onClick, false)
  }


  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp, false)
    document.removeEventListener('click', this.onClick, false)
  }

  /**
   * Close when click outside
   * @param e
   */
  onClick = (e) => {
    e.stopPropagation()
    if (!validClasses.includes(e.target.className)) {
      this.setState({ active: false })
    }
  }

  /**
   * Close on Escape key
   * @param e
   */
  onKeyUp = (e) => {
    if (e.key === 'Escape') {
      this.setState({ active: false })
    }
  }

  /**
   * Activate search
   */
  onActivate = () => {
    const { searchPeople } = this.props
    setTimeout(() => {
      this.setState({ active: true })
      searchPeople('')
      if (this.input) {
        const renderedComponent = this.input.getRenderedComponent()
        renderedComponent.focus()
        renderedComponent.value = ''
      }
    })
  }

  /**
   * Handle change value
   * @param e
   * @param value
   */
  onChange = (e, value) => {
    const { searchPeople } = this.props
    searchPeople(value)
  }

  render() {
    const { active } = this.state
    const { foundPeople } = this.props

    if (!active) {
      return <SearchIcon className={'search-component__inactive-icon'} onClick={this.onActivate}/>
    }

    return <div className="search-component">
      <div className="search-component__search-container">
        <Field
          ref={input => this.input = input}
          component={'input'}
          type={'text'}
          name={'username'}
          className={'search-component__input-field'}
          autoComplete="off"
          onChange={this.onChange}
          withRef
        />
        {foundPeople && <div className="search-component__results">
          <h1 className="search-component__section-title">People</h1>
          <div className="search-component__people-result">
            {foundPeople.map((person, key) => <div key={key} className="search-component__people-result-person">
              <UserPic
                {...person}
                width={'24px'}
                className="search-component__people-result-person-picture"
              />
              <div className="search-component__people-result-person-name">
                {person.name}
              </div>
            </div>)}
          </div>
        </div>}
      </div>
    </div>
  }
}


const sForm = reduxForm({ form: 'search' })(Search)

export default connect(({ common: { foundPeople } }) => ({
  foundPeople,
}), { searchPeople })(sForm)
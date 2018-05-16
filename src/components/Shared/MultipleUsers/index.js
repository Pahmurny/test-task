import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'
import './multipleusers.scss'
import UserPic from 'components/Shared/UserPic'
import MultipleInfo from 'components/Shared/MultipleUsers/MultipleInfo'


class MultipleUsers extends Component {

  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })),
  }

  state = {
    show: false,
  }

  getNames = () => {
    const { users } = this.props
    if (users.length > 1) {
      return `${users[0].name} and ${users.length - 1} other${users.length - 1 > 1 ? 's' : ''}`
    }
    return `${users[0].name}`
  }

  calculateWidth = () => {
    const { users } = this.props
    return 30 + (users.length - 1) * 6
  }

  onMouseOver = (e) => {
    const { clientX, clientY } = e
    const { users } = this.props
    this.setState({
      show: { users, position: { left: clientX + 10, top: clientY } },
    })
  }

  onMouseLeave = () => {
    this.setState({ show: false })
  }

  render() {
    const { users } = this.props
    const { show } = this.state
    const width = this.calculateWidth()


    return (
      <div className="multiple-users"
           onMouseOver={this.onMouseOver}
           onMouseMove={this.onMouseOver}
           onMouseLeave={this.onMouseLeave}>
        <div className="multiple-users__avatars" style={{ width }}>
          {users.map((user, key) => <UserPic
            style={{ left: key * 6 }} className={'avatar'} image={user.image}
            key={key}/>)}
        </div>
        <div
          className="other"
        >{this.getNames()}</div>
        {show && <Portal>
          <MultipleInfo users={show.users} position={show.position}/>
        </Portal>}
      </div>
    )
  }
}


export default MultipleUsers
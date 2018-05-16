import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import UserPic from 'components/Shared/UserPic'
import './aboutblock.scss'

const AboutBlock = ({ image, name, className }) => <div className={cn('about-block', className)}>
  <div>About:</div>
  <UserPic image={image} className="about-block__user-image"/>
  <div>{name}</div>
</div>


AboutBlock.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string
}

export default AboutBlock
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontLatoRegular } from 'styles/constants.scss'
import { activePrimary, textButton, buttonShadow } from 'styles/colors.scss'

const DefaultButton = styled.div`
  background-color: ${activePrimary};
  color: ${textButton};
  font-family: ${fontLatoRegular}, sans-serif;
  font-size: 14px;
  min-width: 72px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  box-shadow: ${buttonShadow};
  text-align: center;
  padding: 0 24px;
  cursor: pointer;
  border-radius: ${props => props.round? props.round : '3px'};
`

DefaultButton.propTypes = {
    onClick: PropTypes.func,
    round: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default DefaultButton

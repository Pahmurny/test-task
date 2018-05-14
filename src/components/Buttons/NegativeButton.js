import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontLatoRegular } from 'styles/constants.scss'
import { negativeButton, buttonText } from 'styles/colors.scss'

const NegativeButton = styled.div`
  background-color: ${negativeButton};
  color: ${buttonText};
  font-family: ${fontLatoRegular}, sans-serif;
  font-size: 14px;
  min-width: 72px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 24px;
  cursor: pointer;
  border-radius: 3px;
`

NegativeButton.propTypes = {
    onClick: PropTypes.func,
    round: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default NegativeButton

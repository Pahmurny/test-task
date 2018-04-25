import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontLatoRegular } from 'styles/constants.scss'


const NegativeButton = styled.div`
  background-color: #C37A83;
  color: #fcfcfc;
  font-family: ${fontLatoRegular}, sans-serif;
  font-size: 14px;
  min-width: 72px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  display: inline-block;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 24px;
  cursor: pointer;
  border-radius: ${props => props.round? props.round : 0};
`

NegativeButton.propTypes = {
    onClick: PropTypes.func,
    round: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default NegativeButton

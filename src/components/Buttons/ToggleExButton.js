import PropTypes from 'prop-types'
import styled from 'styled-components'
import svgOff from 'assets/images/svg/toggle-off.svg'
import svgON from 'assets/images/svg/toggle-on.svg'

const ToggleExButton = styled.div`
      background-image: url(${props => props.active? svgON : svgOff});
      width: 49px;
      height: 26px;
      background-repeat: no-repeat;
      cursor: pointer;
`

ToggleExButton.propTypes = {
    active: PropTypes.bool
}

export default ToggleExButton
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Fade = styled.div`
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: ${props => props.backgroundColor ? props.backgroundColor : 'rgba(155,155,155,0.80)'};
      z-index: ${props => props.zIndex ? props.zIndex : 999999};
      
`

Fade.propTypes = {
    backgroundColor: PropTypes.string
}

export default Fade

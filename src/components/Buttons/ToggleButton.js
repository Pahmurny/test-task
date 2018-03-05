import RequestButton from 'components/Buttons/RequestButton'
import PropTypes from 'prop-types'


const ToggleButton = RequestButton.extend`
    height: 24px;
    position: relative;
    width: 96px;
    line-height: 24px;
    background: ${props => props.active ? '#A9C18E' : '#d0cfd2'};
    border-radius: 0;
    color: ${props => props.active ? '#417505' : '#9f9ba2'};
    box-shadow: 0 0 0 1px ${props => props.active ? '#417505' : '#9F9BA2'};
    z-index: ${props => props.active ? 999999 : 0};
`

ToggleButton.propTypes = {
    active: PropTypes.bool,
}

export default ToggleButton
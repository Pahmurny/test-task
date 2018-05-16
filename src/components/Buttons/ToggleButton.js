import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mainButton } from 'styles/colors.scss'


const ToggleButton = styled.div`
    height: 24px;
    position: relative;
    width: 96px;
    line-height: 24px;
    background: ${props => props.active ? '#A6CBD4' : '#d0cfd2'};
    border-radius: 0;
    color: ${props => props.active ? '#207D94' : '#9f9ba2'};
    box-shadow: 0 0 0 1px ${props => props.active ? '#207D94' : '#9F9BA2'};
    z-index: ${props => props.active ? 999999 : 0};
    //background-color: ${mainButton};
    font-size: 14px;
    padding-left: 18px;
    padding-right: 18px;
    border: none;
`

ToggleButton.propTypes = {
    active: PropTypes.bool,
}

export default ToggleButton
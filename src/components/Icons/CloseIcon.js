import styled from 'styled-components'
import svg from 'assets/images/svg/close.svg'

/**
 *  Default close icon
 */
const CloseIcon = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(${svg});
    background-repeat: no-repeat;
    background-size: 16px 16px;
    cursor: pointer;
`

export default CloseIcon

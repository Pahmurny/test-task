import styled from 'styled-components'
import svg from 'assets/images/svg/close_cross_grey.svg'
import CloseIcon from 'components/Icons/CloseIcon'

/**
 *  The close icon with Grey Color
 */
const CloseGreyIcon = styled(CloseIcon)`
    background-image: url(${svg});
    width: 12px;
    height: 12px;
  background-size: 12px 12px;
`

export default CloseGreyIcon

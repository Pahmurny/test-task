import svg from 'assets/images/svg/small_close.svg'
import CloseIcon from 'components/Icons/CloseIcon'

/**
 *  Default close icon
 */
const SmallCloseIcon = CloseIcon.extend`
    width: 12px;
    height: 12px;
    background-image: url(${svg});
    background-size: 12px 12px;
`

export default SmallCloseIcon

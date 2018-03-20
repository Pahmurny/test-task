import ico from 'assets/images/svg/icon_feedback.svg'
import LockIcon from 'components/Icons/LockIcon'


const EditIcon = LockIcon.extend`
    background-image: url(${ico});
    width: 26px;
    height: 26px;
    cursor: pointer;
`

export default EditIcon

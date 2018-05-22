import ico from 'assets/images/svg/three_dots.svg'
import EditIcon from 'components/Icons/EditIcon'


const ThreeDotIcon = EditIcon.extend`
  background-image: url(${ico});
  background-position: center center;
`

ThreeDotIcon.displayName = 'ThreeDotIcon'

export default ThreeDotIcon
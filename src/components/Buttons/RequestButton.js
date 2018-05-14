import WhiteButton from 'components/Buttons/WhiteButton'
import { mainButton, buttonText } from 'styles/colors.scss'

export default WhiteButton.extend`
  background-color: ${mainButton};
  color: ${buttonText};
  font-size: 14px;
  padding-left: 18px;
  padding-right: 18px;
  border: none;
  border-radius: 5px;
`
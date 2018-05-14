import DefaultButton from 'components/Buttons/DefaultButton'
import { hashButton, textInput } from 'styles/colors.scss'

const HashButton = DefaultButton.extend`
        background: ${hashButton};
        font-size: 14px;
        color: ${textInput};
        height: 24px;
        line-height: 24px;
        box-shadow: none;
`

export default HashButton


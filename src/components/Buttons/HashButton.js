import DefaultButton from 'components/Buttons/DefaultButton'
import { tagPrimary, textPrimary } from 'styles/colors.scss'

const HashButton = DefaultButton.extend`
        background: ${tagPrimary};
        font-size: 14px;
        color: ${textPrimary};
        height: 24px;
        line-height: 24px;
        box-shadow: none;
`

export default HashButton


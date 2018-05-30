import NegativeButton from 'components/Buttons/NegativeButton'
import { activePrimary } from 'styles/colors.scss'


const TransparentButton = NegativeButton.extend`
    background: transparent;
    box-shadow: none;
    color: ${activePrimary};
`


export default TransparentButton
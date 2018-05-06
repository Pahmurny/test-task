import styled from 'styled-components'
import { fontLatoBold } from 'styles/constants.scss'

export const PopupTitle = styled.h3`
    font-family: ${fontLatoBold}, sans-serif;
    font-size: 24px;
    color: #23182d;
    text-align: center;
`
PopupTitle.displayName = 'PopupTitle'

export default PopupTitle
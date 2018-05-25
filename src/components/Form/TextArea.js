import styled from 'styled-components'
import { fontLatoRegular } from 'styles/constants.scss'
import { textPrimary } from 'styles/colors.scss'

const TextArea = styled.textarea`
    width: 100%;
    height: 220px;
    resize: none;
    box-sizing: border-box;
    border: 0;
    outline: none;
    font-family: ${fontLatoRegular}, sans-serif;
    font-size: 14px;
    color: ${textPrimary};
    padding: 6px;
`

export default TextArea
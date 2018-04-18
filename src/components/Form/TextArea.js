import styled from 'styled-components'
import { fontLatoRegular } from 'styles/constants.scss'

const TextArea = styled.textarea`
    width: 100%;
    height: 220px;
    resize: none;
    box-sizing: border-box;
    border: 0;
    outline: none;
    font-family: ${fontLatoRegular}, sans-serif;
    font-size: 14px;
    color: #23182D;
    padding: 6px;
`

export default TextArea
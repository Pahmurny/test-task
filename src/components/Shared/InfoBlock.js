import styled from 'styled-components'
import { fontLatoRegular } from 'styles/constants.scss'

const InfoBlock = styled.div`
        background: #FEFCE8;
        border: 1px solid #9F9BA2;
        border-radius: 5px;
        font-family: ${fontLatoRegular}, sans-serif;
        font-size: 12px;
        color: #23182D;
        padding: 1em;
        position: absolute;
        width: 168px;
        min-height: 72px;
        line-height: 22px;
        transform: translateY(-100%);
`

export default InfoBlock
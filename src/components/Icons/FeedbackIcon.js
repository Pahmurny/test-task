import styled from 'styled-components'
import svg from 'assets/images/svg/icon_feedback_text.svg'



const FeedbackIcon = styled.div`
    background-image: url(${svg});
    width: 24px;
    height: 24px;
    display: inline-block;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    cursor: pointer;
`

export default FeedbackIcon
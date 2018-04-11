import styled from 'styled-components'


const PeopleRow = styled.div`
    display: flex;
    align-items: center;
    border-bottom: ${props => props.last ? 0 : '1px'} solid #9f9ba2;
    min-height: 48px;
    font-family: LatoRegular,sans-serif;
    font-size: 14px;
    color: #23182D;
`

export default PeopleRow
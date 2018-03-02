import PropTypes from 'prop-types'
import styled from 'styled-components'

const Page = styled.div`
    flex:1;
    background: #fcfcfc;
    border-radius: 5px 5px 0 0;
    padding-top: 48px;
    display: ${props => props.flex ? 'flex' : 'block'};
    flex-direction: ${props => props.direction ?  props.direction : 'column'};
`

Page.propType = {
    children: PropTypes.any,
}


export default Page
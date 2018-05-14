import styled from 'styled-components'

const Divider = styled.div`
    font-family: LatoBold,sans-serif;
    font-size: 14px;
    color: #bbb9bd;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    
    &:after {
      content: '';
      display: block;
      height: 1px;
      background-color: #bbb9bd;
      font-size: 0;
      width: 100%;
    }
`




export default Divider
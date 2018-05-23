import PropTypes from 'prop-types'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
      flex-direction: column;
      flex: 1;
      background: #f0eff1;
      padding-top: 50px;
      padding-left: 50px;
      padding-right: 50px;
`


Content.propTypes = {
    children: PropTypes.any,
}


export default Content
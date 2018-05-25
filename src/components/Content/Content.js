import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mainBG } from 'styles/colors.scss'

const Content = styled.div`
    display: flex;
      flex-direction: column;
      flex: 1;
      background: ${mainBG};
      padding-top: 48px;
      padding-left: 48px;
      padding-right: 48px;
`


Content.propTypes = {
    children: PropTypes.any,
}


export default Content
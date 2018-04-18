import PropTypes from 'prop-types'
import styled from 'styled-components'
import up from 'assets/images/svg/drop_down_arrow.svg'
import down from 'assets/images/svg/drop_down_arrow_down.svg'

const DropdownArrow = styled.div`
    background-image: url(${props => props.active? up : down});
    background-repeat: no-repeat;
    background-size: 24px 24px;
    width: 24px;
    height: 24px;
    display: inline-block;
`

DropdownArrow.propTypes = {
    active: PropTypes.bool
}

export default DropdownArrow
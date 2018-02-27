import React  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RoundedTopBlock = styled.div`
        border: 1px solid #9F9BA2;
        border-radius: 3px 3px 0 0;
        display: block;
        min-height: 36px;
`

RoundedTopBlock.propTypes = {
    children: PropTypes.any
}

export default RoundedTopBlock
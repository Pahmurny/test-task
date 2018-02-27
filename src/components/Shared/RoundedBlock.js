import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RoundedTopBlock from 'components/Shared/RoundedTopBlock'


const RoundedBlock = styled(RoundedTopBlock)`
    border-radius: 3px;
`

RoundedBlock.propTypes = {
    children: PropTypes.any
}


export default RoundedBlock
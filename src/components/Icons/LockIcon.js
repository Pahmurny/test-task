import React from 'react'
import styled from 'styled-components'
import lockedSvg from 'assets/images/svg/lock-icon.svg'


const LockIcon = styled.div`
  background-image: url(${lockedSvg});
  display: block;
  width: 10px;
  height: 12px;
  background-repeat: no-repeat;
`


export default LockIcon

import React from 'react'
import styled from 'styled-components'
import svg from 'assets/images/svg/show_more_plus.svg'
import 'styles/fonts.scss'

const PlusButton = styled.div`
      display: inline-block;
      background-image: url(${svg});
      width: 22px;
      height: 22px;
`


export default PlusButton
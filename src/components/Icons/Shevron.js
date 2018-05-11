import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Svg from 'components/Shared/Html/Svg'

const Shevron = ({ fill = '#5F5864', ...props }) => <Svg width="10px" height="6px" viewBox="0 0 10 6" {...props}>
  <g id="feedback_dropdown" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
     transform="translate(-127.000000, -13.000000)">
    <g id="feedback_subheader" fill={fill}>
      <g id="header">
        <g id="button_settings">
          <path
            d="M131.301175,18.7009323 C131.500523,18.9062278 131.750411,19.0006604 131.999969,18.9999965 C132.249527,19.0006604 132.49925,18.9063937 132.688689,18.7160349 C132.693148,18.7115539 136.716956,14.6632335 136.716956,14.6632335 C137.094348,14.2840095 137.094348,13.6634761 136.716956,13.284418 C136.339564,12.90536 135.722029,12.905194 135.344802,13.284418 L131.999804,16.6453222 L128.655136,13.284418 C128.277744,12.905194 127.660209,12.905194 127.282982,13.284418 C126.905755,13.6636421 126.90559,14.2841754 127.282982,14.6632335 L131.301175,18.7009323 Z"
            id="Shape"></path>
        </g>
      </g>
    </g>
  </g>
</Svg>



const SShevron = styled(Shevron)`
    display: inline-block;
    width: 10px;
    height: 6px;
    background-size: 10px 6px;
`

SShevron.propTypes = {
  fill: PropTypes.string
}

export default SShevron
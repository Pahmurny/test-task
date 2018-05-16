import React from 'react'
import PropTypes from 'prop-types'
import Svg from 'components/Shared/Html/Svg'

const PencilIcon = ({ className, onClick }) => <Svg className={className} width={'18px'} height={'18px'} viewBox={'0 0 18 18'} onClick={onClick}>
  <g id="Global-Features" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Artboard" transform="translate(-441.000000, -7047.000000)" fill="#207D94" fillRule="nonzero">
      <g id="global:_my_public_profile_2" transform="translate(0.000000, 6912.000000)">
        <g id="lightbox" transform="translate(288.000000, 120.000000)">
          <g id="bg-lightbox">
            <g id="icon-pencil" transform="translate(153.000000, 15.000000)">
              <path
                d="M2.8081333,10.6977596 L13.1543246,0.353453 C13.3496057,0.158209885 13.6661882,0.15824074 13.8614313,0.353521915 C13.8614533,0.353543894 13.8614753,0.353565876 13.8614973,0.353587859 L17.6464175,4.14104905 C17.8415736,4.33631605 17.8415417,4.65279868 17.6463462,4.84802632 L7.30440417,15.191814 C7.10918077,15.3870695 6.79264306,15.3871216 6.59735546,15.1919302 L2.80806443,11.4048664 C2.61275415,11.2096524 2.6126761,10.8930699 2.8078901,10.6977596 C2.80793063,10.6977191 2.80797117,10.6976785 2.80801171,10.697638 Z"
                id="Shape"></path>
              <path
                d="M1.48942814,12.2727273 L0.42852688,16.3521929 C0.289523862,16.8866988 0.610142333,17.4326857 1.14464828,17.5716887 C1.30964423,17.6145974 1.48287071,17.6146108 1.64787329,17.5717276 L5.72727273,16.511516 L1.48942814,12.2727273 Z"
                id="Shape"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</Svg>


PencilIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default PencilIcon
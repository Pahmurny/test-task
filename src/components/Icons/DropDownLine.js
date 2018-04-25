import React from 'react'
import PropTypes from 'prop-types'
import Svg from 'components/Shared/Html/Svg'

/**
 * Component to show dropdown icon
 * @param className
 * @param active
 * @param props
 * @returns {*}
 * @constructor
 */
const DropDownLine = ({ className, active, ...props }) => <Svg version="1.1" viewBox="0 0 18 18" width={18} height={18}
                                                               className={className} {...props}>
    <g fill="none" fillRule="evenodd">
        <g transform="translate(-696 -14091)">
            <g transform="translate(0 13824)">
                <g transform="translate(432 191)">
                    <g transform="translate(24 70)">
                        <g transform="translate(72)">
                            <g transform="translate(167 6)">
                                <path d="m1.5 0.5v17" stroke="#fff" strokeLinecap="square"/>
                                <path
                                    transform={`translate(13.5 9) scale(1 ${active ? 1 : -1}) translate(-13.5 -9)`}
                                      d="m13.51 6c0.19288 0 0.38576 0.077257 0.52077 0.21246l4.7255 4.4423c0.30861 0.28971 0.3279 0.77257 0.038576 1.1009-0.28932 0.30903-0.77152 0.32834-1.0994 0.038628l-4.1855-3.9594-4.2048 3.9401c-0.30861 0.28971-0.79081 0.2704-1.0994-0.038628-0.28932-0.30903-0.27003-0.79188 0.038576-1.1009l4.7255-4.4423c0.1543-0.11589 0.34718-0.19314 0.54006-0.19314z"
                                      fill="#fff" fillRule="nonzero"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</Svg>


DropDownLine.propTypes = {
    active: PropTypes.bool,
}


export default DropDownLine
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Svg from 'components/Shared/Html/Svg'

/**
 *  Lock Icon
 */
const LockIcon2 = ({ className, fillColor = '#545454', ...props }) => <Svg width={'10px'} height={'12px'}
                                                                          className={className}
                                                                          viewBox="0 0 10 12" {...props}>
    <g transform="translate(-1096 -366)" fill="none" fillRule="evenodd">
        <g fill={fillColor} fillRule="nonzero">
            <g transform="translate(576 288)">
                <g transform="translate(1 48)">
                    <g transform="translate(519 24)">
                        <g transform="translate(0 6)">
                            <path
                                d="m5 0c-1.7752 0-3.2143 1.511-3.2143 3.375v1.875h-0.35714c-0.78898 0-1.4286 0.67157-1.4286 1.5v3.75c0 0.82843 0.63959 1.5 1.4286 1.5h7.1429c0.78898 0 1.4286-0.67157 1.4286-1.5v-3.75c0-0.82843-0.63959-1.5-1.4286-1.5h-0.35714v-1.875c0-1.864-1.4391-3.375-3.2143-3.375zm1.5 5h-3v-1.6667c0-0.73638 0.67157-1.3333 1.5-1.3333s1.5 0.59695 1.5 1.3333v1.6667z"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</Svg>

LockIcon2.displayName  = 'LockIcon2'

LockIcon2.propTypes = {
    fillColor: PropTypes.string
}

export default styled(LockIcon2)``

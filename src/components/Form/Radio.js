import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styled from 'styled-components'
import Chosen from 'components/Icons/Chosen'
import UnChosen from 'components/Icons/UnChosen'
import { fontLatoRegular } from 'styles/constants.scss'
import { greyDark } from 'styles/colors.scss'


const icons = [
    <Chosen style={{ marginRight: 10 }}/>,
    <UnChosen style={{ marginRight: 10 }}/>,
]

const R = ({ className, children, selected = false, onClick }) => <div onClick={() => onClick && onClick()}
                                                                       className={cn('radio', className)}>
    {selected ? icons[0] : icons[1]}
    {children}</div>


const Radio = styled(R)`
    display: flex;
    justify-content: flex-start;
    color: ${greyDark};
    font-family: ${fontLatoRegular}, sans-serif;
    margin-top: 12px;
    cursor: pointer;
`


Radio.propTypes = {
    selected: PropTypes.bool,
}

export default Radio





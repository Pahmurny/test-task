import styled from 'styled-components'
import leftInactive from 'assets/images/svg/drop_dpwn_arrow_inactive_left.svg'
import rightActive from 'assets/images/svg/drop_dpwn_arrow_active_right.svg'

export const PageArrowLeft = styled.div`
    background-image: url(${props => props.active ? rightActive : leftInactive });
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    display: inline-block;
    transform: rotate(${props => props.active ? '180deg' : 0});
`


export const PageArrowRight = PageArrowLeft.extend`
    transform: rotate(${props => props.active ? 0 : '180deg'});

`
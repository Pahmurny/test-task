import React  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { subBG, borderPrimary, textPrimary, greyDark } from 'styles/colors.scss'
import { fontLatoRegular, fontLatoBold } from 'styles/constants.scss'


export const STextInput = styled.input`
        margin-left: 12px;
        background: ${subBG};
        border: 1px solid ${borderPrimary};
        border-radius: 3px;
        outline: none;
        line-height: 24px;
        font-family: ${fontLatoRegular},sans-serif;
        font-size: 14px;
        color: ${textPrimary};
        width: ${props => props.width? props.width : '180px'};
        padding: 0 6px; 
`

export const FormLabel = styled.label`
    display: flex;
    align-items: center;  
    justify-content: flex-end;
    font-family: ${fontLatoBold},sans-serif;
    font-size: 16px;
    color: ${greyDark};
    margin-bottom: 24px;
`

const TextFieldLabel = ({ input: { value, onChange }, className, label, width }) => <FormLabel className={className}>
    {label}
    <STextInput type="text" width={width} value={value} onChange={(e) => onChange(e.target.value)}/>
</FormLabel>


TextFieldLabel.propTypes= {
    label: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string
}

export default TextFieldLabel
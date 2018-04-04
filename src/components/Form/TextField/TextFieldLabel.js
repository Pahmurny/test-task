import React  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const STextInput = styled.input``

const TextFieldLabel = ({ input: { value, onChange }, className, label }) => <label className={className}>
    {label}
    <STextInput type="text" value={value} onChange={(e) => onChange(e.target.value)}/>
</label>


TextFieldLabel.propTypes= {
    label: PropTypes.string,
    className: PropTypes.string
}

export default styled(TextFieldLabel)`
    display: flex;
    align-items: center;  
    justify-content: flex-end;
    font-family: LatoBold,sans-serif;
    font-size: 16px;
    color: #4A4A4A;
    margin-bottom: 24px;
    
    ${STextInput} {
        margin-left: 10px;
        background: #FCFCFC;
        border: 1px solid #9F9BA2;
        border-radius: 3px;
        outline: none;
        line-height: 24px;
        font-family: LatoRegular,sans-serif;
        font-size: 14px;
        color: #23182D;
        width: 168px;
        padding-left: 10px;
    }
`
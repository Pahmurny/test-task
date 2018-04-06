import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styled from 'styled-components'
import Checkbox from 'components/Form/Checkbox/Checkbox'



const StyledCheckBox = styled(Checkbox)``

class TagsFormFieldOption extends Component{

    onSelect = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSelect(this.props.option, event);
    }

    render(){
        const { option: { label }, isSelected, className = '' } = this.props
        return(
            <div
                className={cn('field-option', className.replace(/Select/g, ''))}
                onMouseDown={this.onSelect}
            >
                <StyledCheckBox checked={isSelected}/> {label}
            </div>
        )
    }

}

export default styled(TagsFormFieldOption)`
    display: flex;
    align-items: center;
    height: 35px;
    
    ${StyledCheckBox} {
        margin-left: 6px;
        margin-right: 4px;
        margin-bottom: 0;
    }
`
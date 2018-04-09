import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { FormLabel } from 'components/Form/TextField/TextFieldLabel'


const TagsFormField = ({
                           input: { value, onChange },
                           label,
                           options,
                           className,
                           optionComponent,
                           multi = false,
                           style,
                           valueMapper,
                           valueUnmapper
                       }) => {

    return <FormLabel style={style}>
        {label}
        <Select
            className={className}
            value={multi ? value.map(v => v.value) : (valueMapper ? valueMapper(value) : value)}
            onChange={valueUnmapper ? (v) => {
                const unmapValue  = valueUnmapper(v)
                onChange(unmapValue)
            } : onChange}
            options={options}
            removeSelected={false}
            optionComponent={optionComponent}
            multi={multi}
        />
    </FormLabel>
}


TagsFormField.propTypes = {
    optionComponent: PropTypes.any,
    options: PropTypes.array,
    label: PropTypes.string,
    valueMapper: PropTypes.func,
    valueUnmapper: PropTypes.func,
}

export default TagsFormField

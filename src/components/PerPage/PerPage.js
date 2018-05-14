import React from 'react'
import PerPageDropDown from 'components/PerPage/PerPageDropDown'


const PerPage = ({ input: { value, onChange }, options }) => <PerPageDropDown options={options} value={value}
                                                                              onChange={onChange}/>


export default PerPage
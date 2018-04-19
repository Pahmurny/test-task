import React from 'react'
import PropTypes from 'prop-types'
import YellowRounded from 'components/Shared/YellowRounded'
import './valuestab.scss'
import SmallCloseIcon from 'components/Icons/SmallCloseIcon'
import Label from 'components/Shared/Label'
import { VALUES_FIELD } from 'routes/adminSettings/components/SettingsForm/inputNames'
import { Field, FieldArray } from 'redux-form'
import TextAreaField from 'components/Form/TextAreaField/TextAreaField'
import PlusButton from 'components/Buttons/PlusButton'


const renderValues = ({ fields }) => {
    return <React.Fragment>{fields.map((value, key) => <YellowRounded key={key} className={'values-tab__field-group'}>
        <SmallCloseIcon
            className={'values-tab__field-group--close'}
            onClick={() => fields.remove(key)}
        />
        <Label>
            Name
        </Label>
        <Field
            name={`${value}.name`}
            className={'values-tab__field-group--textfield'}
            component={'input'}
            placeholder={'Required, what is the tag name?'}
        />
        <Label>
            Description
        </Label>
        <TextAreaField
            name={`${value}.description`}
            className={'values-tab__field-group--textarea'}
            placeholder={'Optional, write your description.'}

        />
    </YellowRounded>)}
        <div className="values-tab__actions">
            <div onClick={() => fields.push({
                name: '',
                description: '',
            })}
                 className={'add-value'}
            ><PlusButton className={'btn'}/> New Value
            </div>
        </div>
    </React.Fragment>
}


const ValuesTab = ({ addValue, deleteValue }) => <div className="values-tab">
    <div className="values-tab__header">Employees can tag feedback with these values.</div>
    <FieldArray name={VALUES_FIELD} component={renderValues} deleteValue={deleteValue}/>
</div>


export default ValuesTab
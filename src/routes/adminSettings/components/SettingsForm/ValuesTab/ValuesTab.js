import React from 'react'
import YellowRounded from 'components/Shared/YellowRounded'
import SmallCloseIcon from 'components/Icons/SmallCloseIcon'
import Label from 'components/Shared/Label'
import { VALUES_FIELD } from 'routes/adminSettings/components/SettingsForm/inputNames'
import { Field, FieldArray } from 'redux-form'
import TextAreaField from 'components/Form/TextAreaField/TextAreaField'
import PlusButton from 'components/Buttons/PlusButton'
import DefaultButton from 'components/Buttons/DefaultButton'
import './valuestab.scss'

/**
 * Renders Array of values
 * @param fields
 * @returns {*}
 */
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
    {fields.length > 0 && <div className="values-tab__save">
      <DefaultButton round={'3px'}>Save Values</DefaultButton>
    </div>}
  </React.Fragment>
}


const ValuesTab = () => <div className="values-tab">
  <div className="values-tab__header">Employees can tag feedback with these values.</div>
  <FieldArray
    name={VALUES_FIELD}
    component={renderValues}
  />
</div>


export default ValuesTab
import React from 'react'
import FieldBlock from 'routes/adminReviews/components/TemplatesForm/FieldsArray/FieldBlock'
import './numberArray.scss'
import { MAX_VARIANTS } from 'routes/adminReviews/components/TemplatesForm/index'


const NumberArray = ({ fields }) => {

  let numCount = 0;
  let rightNumCount = 5;

  return <div className="numbers">
    {fields.map((field, key) => <FieldBlock
        key={key}
        isRight={key > 4}
        left={<span
          className="numbers__count"
        >{key % 2 === 0 ? ++numCount : ++rightNumCount}</span>}
        onRemove={() => fields.remove(key)}
        field={`${field}.value`}
      />,
    )}
    {fields.length < MAX_VARIANTS && <div className="field-container">
      <div onClick={() => fields.push({})} className="add-more">+ Rating</div>
    </div>}
  </div>
}


export default NumberArray
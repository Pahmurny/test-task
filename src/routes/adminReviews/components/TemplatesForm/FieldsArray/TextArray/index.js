import React from 'react'
import FieldBlock from 'routes/adminReviews/components/TemplatesForm/FieldsArray/FieldBlock'
import './textArray.scss'
import { MAX_VARIANTS } from 'routes/adminReviews/components/TemplatesForm/index'


const TextArray = ({ fields }) => <div className="text-array">
  {fields.map((field, key) => <FieldBlock
      key={key}
      hasLeft={false}
      isRight={key > 4}
      onRemove={() => fields.remove(key)}
      field={`${field}.value`}
    />,
  )}
  {fields.length < MAX_VARIANTS && <div className="field-container">
    <div onClick={() => fields.push({})} className="add-more">+ Rating</div>
  </div>}
</div>


export default TextArray
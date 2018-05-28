import React from 'react'
import FieldBlock from 'routes/adminReviews/components/TemplatesForm/FieldsArray/FieldBlock'
import './textArray.scss'


const TextArray = ({ fields }) => <div className="text-array">
  {fields.map((field, key) => <FieldBlock
      key={key}
      hasLeft={false}
      isRight={key > 4}
      onRemove={() => fields.remove(key)}
      field={`${field}.value`}
    />,
  )}
</div>


export default TextArray
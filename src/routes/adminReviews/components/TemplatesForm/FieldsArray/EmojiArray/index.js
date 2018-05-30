import React from 'react'
import './emojiarray.scss'
import FieldBlock from 'routes/adminReviews/components/TemplatesForm/FieldsArray/FieldBlock'

const EmojiArray = ({ fields }) => {

  const wholeValues = fields.getAll()

  return <div className="emojis">
    {fields.map((field, key) => <FieldBlock
        key={key}
        isRight={key > 4}
        left={<span
          className="emoji"
          dangerouslySetInnerHTML={{ __html: wholeValues[key]['emoji'] && String.fromCodePoint(wholeValues[key]['emoji']) }}/>}
        onRemove={() => fields.remove(key)}
        field={`${field}.value`}
      />,
    )}
  </div>
}


export default EmojiArray
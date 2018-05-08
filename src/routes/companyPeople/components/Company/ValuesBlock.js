import React from 'react'
import cn from 'classnames'
import './valuesblock.scss'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'


const isContent = content => (content && content.length > 0)

const ValuesItem = ({ name, description }) => <div className="values-block__item">
  <div className={cn('values-block__item-title', { blank: !isContent(description) })}>{name}</div>
  {isContent(description) && <div className="values-block__item-content">{description}</div>}
</div>


const ValuesBlock = ({ values }) => <div className="values-block">
  <h2 className="values-block__title">Values</h2>
  <ScrollBlock style={{ height: 332 }}>
    {values.map((value, key) => <ValuesItem key={key} {...value}/>)}
  </ScrollBlock>
</div>

export default ValuesBlock
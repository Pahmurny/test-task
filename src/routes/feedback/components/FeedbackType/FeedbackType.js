import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './feedbackType.scss'

const FeedbackType = ({ items = [], activeItem = { id: -1 }, onChange }) => <div className="feedback-type">
    {
        items.map((item, key) => <div key={key}
                                      onClick={() => {
                                          if(onChange){
                                              onChange(key)
                                          }
                                      }}
                                      className={cn('feedback-type__item', { active: item.id === activeItem.id })}
        >{item.title}</div>)
    }
</div>


FeedbackType.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.any,
        title: PropTypes.any,
    })),
    activeItem: PropTypes.shape({
        id: PropTypes.any,
    }),
    onChange: PropTypes.func
}


export default FeedbackType
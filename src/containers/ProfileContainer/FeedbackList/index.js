import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FromToFeedback from 'components/Feedback/FromToFeedback'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import { connect } from 'react-redux'
import showMore from 'containers/ProfileContainer/actions/showMore'
import './profilefeedbacklist.scss'


const feedbackList = [
  {
    'locked': true,
    'date': '2018-12-05T10:19:11.076Z',
    'user': {
      'name': 'Samara Stoltenberg',
      'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
    },
    'to': {
      'user': {
        'name': 'Samara Stoltenberg',
        'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
      },
    },
    'requester': false,
    'content': 'Sit ad eum nobis.\nVitae excepturi fuga vel vitae.',
    'tags': [
      'qui',
      'repudiandae',
      'dolorem',
      'qui',
      'unde',
    ],
  },
  {
    'locked': true,
    'date': '2018-08-26T00:55:06.576Z',
    'user': {
      'name': 'Amber Auer from',
      'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/bistrianiosip/128.jpg',
    },
    'to': {
      'user': {
        'name': 'Samara Stoltenberg to',
        'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
      },
    },
    'requester': {
      'user': {
        'name': 'Samara Stoltenberg req',
        'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
      },
    },
    'content': 'Atque quisquam quo nemo eos nihil explicabo officia tempora itaque.\nDeleniti asperiores sint iusto est magni ad velit officia cumque.\nPerferendis sint eos explicabo.\nRerum iusto velit facilis.\nAliquam aut doloribus quam velit itaque sint et tempore.',
    'response': {
      'locked': true,
      'date': '2018-03-03T07:30:58.325Z',
      'user': {
        'name': 'Amber Auer',
        'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/bistrianiosip/128.jpg',
      },
      'to': {
        'user': {
          'name': 'Samara Stoltenberg',
          'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
        },
      },
      'content': 'Illo ut eos repellat omnis assumenda.',
      'tags': [
        'inventore',
        'consequatur',
        'error',
        'qui',
        'nulla',
      ],
    },
    'tags': [
      'maxime',
      'nihil',
      'aut',
      'aut',
      'placeat',
    ],
  },
  {
    'locked': true,
    'date': '2018-11-09T06:48:56.731Z',
    'user': {
      'name': 'Sigurd Watsica',
      'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg',
    },
    'to': {
      'user': {
        'name': 'Samara Stoltenberg',
        'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
      },
    },
    'requester': {
      'user': {
        'name': 'Samara Stoltenberg',
        'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
      },
    },
    'content': 'Voluptatibus eaque rerum voluptas enim voluptatum dolore temporibus beatae exercitationem.\nIpsam est odit.',
    'response': {
      'locked': true,
      'date': '2018-03-03T07:30:58.325Z',
      'user': {
        'name': 'Amber Auer',
        'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/bistrianiosip/128.jpg',
      },
      'to': {
        'user': {
          'name': 'Samara Stoltenberg',
          'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
        },
      },
      'content': 'Illo ut eos repellat omnis assumenda.',
      'tags': [
        'inventore',
        'consequatur',
        'error',
        'qui',
        'nulla',
      ],
    },
    'tags': [
      'rerum',
      'ut',
      'repudiandae',
      'voluptas',
      'velit',
    ],
  },
]


class FeedbackList extends Component {

  static propTypes = {
    list: PropTypes.array,
    shorter: PropTypes.bool,
    showMore: PropTypes.func,
  }

  onSeeMore = () => {
    const { showMore } = this.props
    showMore()
  }

  render() {
    const { feedbacks, shorter } = this.props
    return (
      <div className="profile-feedback-list">
        <div className="profile-feedback-list__header">
          <h3>Public feedback</h3>
          <div className="more" onClick={this.onSeeMore}>See more</div>
        </div>
        <ScrollBlock style={{
          minHeight: shorter ? 470 - 72 : 470,
        }}>
          {feedbacks.map((feedback, key) => <FromToFeedback
            {...feedback}
            key={key}
            className={'profile-feedback-list__feedback'}
          />)}
        </ScrollBlock>
      </div>
    )
  }
}


FeedbackList.defaultProps = {
  feedbacks: feedbackList,
}


export default connect(null, { showMore })(FeedbackList)
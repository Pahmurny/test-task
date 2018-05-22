import React, { Component } from 'react'
import './templates.scss'
import DefaultButton from 'components/Buttons/DefaultButton'
import EditIcon from 'components/Icons/EditIcon'
import Modal from 'components/Shared/Modal'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import { PopupTitle } from 'components/Shared/PopupTitle'


const fakeTemplates = [
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    is_active: true,
    review_cycles: {     // Should be an array
      id: 555,
      name: 'CareerLark Q4 review',
    },
  },
  {
    id: 123,
    name: 'Careerlark Peer Review Default',
    review_cycles: {
      id: 555,
      name: 'CareerLark Q4 review',
      is_active: true,
    },
  },
]


class Templates extends Component {


  state = {
    newTemplate: false,
  }

  render() {
    const { newTemplate } = this.state
    const { templates } = this.props

    return <div className="templates">
      <div className="templates__actions">
        <DefaultButton onClick={() => this.setState({ newTemplate: true })}>+ Template</DefaultButton>
      </div>
      <div className="templates__grid">
        <div className="templates__grid-title">
          <div className="templates__grid-row">
            <div className="templates__grid-cell">Cycle</div>
            <div className="templates__grid-cell">In Use</div>
          </div>
        </div>
        <div className="templates__grid-data">
          {templates.map(({ name, review_cycles: { name: cycleName } }, key) => (
            <div className="templates__grid-row" key={key}>
              <div className="templates__grid-cell">{name}</div>
              <div className="templates__grid-cell">{cycleName}
                <div className="action">
                  <EditIcon/>
                </div>
              </div>
            </div>))}
        </div>
      </div>
      {newTemplate && <Modal closeForm={() => this.setState({ newTemplate: false })}>
        <FeedbackForm
          title={<PopupTitle>Templates</PopupTitle>}
          onClose={() => this.setState({ newTemplate: false })}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>

        </FeedbackForm>
      </Modal>}
    </div>
  }
}


Templates.defaultProps = {
  templates: fakeTemplates,
}

export default Templates
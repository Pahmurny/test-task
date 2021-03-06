import React, { Component } from 'react'
import PlusButton from 'components/Buttons/PlusButton'
import TagLine from 'routes/adminSettings/components/SettingsForm/TagsTab/TagLine'
import './taglines.scss'


class TagLines extends Component {

  state = {
    add: false,
    name: '',
  }


  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.addTag()
    }
    if (e.keyCode === 27) {
      this.closeNewInput()
    }
  }

  addTag = () => {
    const { fields } = this.props
    const { name } = this.state

    if (name.length > 0) {
      fields.push({ name, active: true })
      this.closeNewInput()
    }
  }

  closeNewInput = () => {
    this.setState({ name: '', add: false })
  }

  showNewInput = () => {
    this.setState({ add: true }, () => {
      this.newTagInput.focus()
    })
  }

  render() {
    const { fields, tags } = this.props
    const { add, name } = this.state
    return (
      <div className="tag-lines">
        {fields.map((tag, key) => <TagLine
          key={key}
          idx={key}
          tag={tag}
          tags={tags}
          onRemove={idx => fields.remove(idx)}
        />)}
        <div className="actions">
          {!add && <div className="actions__handler"
                        onClick={this.showNewInput}
          >
            <PlusButton className={'plusbtn'}/>
            New Team
          </div>}
          {add &&
          <React.Fragment>
            <input
              ref={newTagInput => this.newTagInput = newTagInput}
              type="text"
              className="new-field-name"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              placeholder={'Type your team name here...'}
              onKeyDown={this.onKeyDown}
            />
            <PlusButton
              className={'plusbtn'}
              onClick={this.addTag}
            />
          </React.Fragment>
          }
        </div>
      </div>
    )
  }
}


export default TagLines
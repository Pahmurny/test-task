import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import ThreeDotsIcon from 'components/Icons/ThreeDotsIcon'
import { Portal } from 'react-portal'
import './tagline.scss'
import ToggleExField from 'components/Form/ToggleExField'
import Modal from 'components/Shared/Modal'
import FeedbackForm from 'routes/feedback/components/FeedbackForm/FeedbackForm'
import { PageTitle } from 'components/Shared/PageTitle'


class TagLine extends Component {

    static propTypes = {
        idx: PropTypes.any.isRequired,
        tag: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        onRemove: PropTypes.func,
    }

    state = {
        edit: false,
        context: false,
        onDelete: false,
    }

    componentDidMount() {
        document.addEventListener('click', this.mouseClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.mouseClick, false)
    }


    mouseClick = (e) => {
        const { context } = this.state

        if (context && this.cont && !e.target.contains(this.cont)) {
            this.closeContext()
        }
    }

    closeContext = () => {
        this.setState({ context: false })
    }

    openContext = (e) => {
        e.stopPropagation()
        e.preventDefault()
        e.persist()
        setTimeout(() => {
            this.setState({ context: { left: e.clientX, top: e.clientY - 94 } })
        }, 10)
    }

    editState = (edit) => {
        this.setState({
            edit,
        }, () => {
            if (edit) {
                const inputField = this.editField.getRenderedComponent()
                inputField.focus()
            }
        })
    }

    onKeyDown = (e) => {
        const { idx, tags } = this.props

        if (e.keyCode === 13) {
            e.preventDefault()
        }

        if ((e.keyCode === 13 || e.keyCode === 27) &&
            tags[idx] &&
            tags[idx].name &&
            tags[idx].name.trim().length > 0) {
            this.editState(false)
        }
    }

    onRemove = () => {
        const { onRemove } = this.props
        const { onDelete } = this.state
        if (onDelete !== false) {
            onRemove(onDelete)
            this.setState({ onDelete: false })
        }
    }

    render() {
        const { idx, tag, tags } = this.props
        const { context, edit, onDelete } = this.state
        return (
            (<div className="tag-line"
            >
                <div className="tag-line__col">
                    {!edit && <span onDoubleClick={() => this.editState(true)}>{tags[idx].name}</span>}
                    {edit && <div
                        className="tag-line__edit-field">
                        <Field
                            name={`${tag}.name`}
                            component={'input'}
                            type={'text'}
                            onKeyDown={this.onKeyDown}
                            ref={editField => this.editField = editField}
                            className="tag-line__edit-field--input"
                            withRef
                        /></div>}
                </div>
                <div className="tag-line__col">
                    <div className="toggle">
                    <Field name={`${tag}.active`} component={ToggleExField} some={1}/>
                    </div>
                </div>
                <div className="tag-line__col">
                    <div className="edit-block">
                        <ThreeDotsIcon
                            onClick={this.openContext}/>
                    </div>
                </div>

                {context && <Portal>
                    <div
                        className="tag-line__popup"
                        style={context}
                        ref={cont => this.cont = cont}
                    >
                        <div
                            className="tag-line__popup--action delete"
                            onClick={() => this.setState({ onDelete: idx })}
                        >Delete
                        </div>
                        <div
                            className="tag-line__popup--action"
                            onClick={() => this.editState(true)}
                        >Edit
                        </div>
                    </div>
                </Portal>}

                {onDelete !== false && <Modal closeForm={() => this.setState({ onDelete: false })}>
                    <FeedbackForm
                        onClose={() => this.setState({ onDelete: false })}
                        title={<PageTitle className={'tag-line__delete--title'}>Delete this tag?</PageTitle>}
                        style={{
                            minHeight: 50,
                            width: 576,
                        }}
                    >
                        <div className="tag-line__delete--confirm">
                            Removing this tag will disassociate it from any element to which you have applied it.
                            You will not be able to recover this tag;
                            you will have to re-create it if you want to re-apply it.
                        </div>
                        <div className="tag-line__delete--actions">
                            <div
                                className="tag-line__delete--action"
                                onClick={() => this.setState({ onDelete: false })}
                            >Cancel
                            </div>
                            <div
                                className="tag-line__delete--action"
                                onClick={this.onRemove}
                            >Delete
                            </div>
                        </div>
                    </FeedbackForm>
                </Modal>}
            </div>)
        )
    }
}


export default TagLine
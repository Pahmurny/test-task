import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './uploadcvform.scss'
import DefaultButton from 'components/Buttons/DefaultButton'
import DropDownLine from 'components/Icons/DropDownLine'
import Dz from 'react-dropzone'


const DownloadExiting = 'Download existing data'
const DownloadTemplate = 'Download template'


/**
 * Form to download data or upload csv
 */
class UploadForm extends Component {

    state = {
        download: false,
    }


    render() {
        const { download, text } = this.state

        return (
            <div className="upload-cv-form">

                <div className="upload-cv-form__title-block">
                    <div className="upload-cv-form__title">Step 1:</div>
                    <div className="upload-cv-form__download-area">
                        {download && <div
                            className="upload-cv-form__download-options"
                            onClick={() => this.setState({ download: false })}>
                            <a
                                href="#existing"
                                className="upload-cv-form__download-option"
                                onClick={() => this.setState({ text: DownloadExiting })}
                            >{DownloadExiting}</a>
                            <a
                                onClick={() => this.setState({ text: DownloadTemplate })}
                                href="#template"
                                className="upload-cv-form__download-option"
                            >{DownloadTemplate}</a>
                        </div>}
                        <DefaultButton
                            className="upload-cv-form__download-btn"
                            onClick={() => this.setState({ download: true })}>
                            <div className="upload-cv-form__download-btn--text">{text || 'Download template'}</div>
                            <DropDownLine active={download} className={'icon'}/>
                        </DefaultButton>
                    </div>
                </div>
                <div className="upload-cv-form__text">
                    The CSV must include fields for Full Name, Title, and Email. You may also include fields for Start
                    Date, Phone Number, and Status. (Status must be either Active or Terminated.)
                </div>

                <div className="upload-cv-form__title-block">
                    <div className="upload-cv-form__title">Step 2:</div>
                    <Dz
                        className={'upload-cv-form__upload-zone'}
                        accept="text/csv"
                    >
                        <DefaultButton className="upload-cv-form__upload-btn">Upload CSV</DefaultButton>
                    </Dz>
                </div>
                <div className="upload-cv-form__text2">
                    We’ll import and update employees from your CSV. New employees that are added to CareerLark will not
                    be sent invites. You can invite them afterwards from the Directory page.
                </div>
            </div>
        )
    }
}


export default UploadForm
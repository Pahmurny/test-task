import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { reduxForm, Field } from 'redux-form'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'

const SettingsForm = ({ handleSubmit }) =>
    <Tabs className={'settings-container__tabs-container'}>
        <TabList className={'settings-container__tabs'}>

            <Tab
                className={'settings-container__tab'}
                selectedClassName={'settings-container__tab--selected'}
            >Profile</Tab>
            <Tab
                className={'settings-container__tab'}
                selectedClassName={'settings-container__tab--selected'}
            >Values</Tab>
            <Tab className={'settings-container__tab'}
                 selectedClassName={'settings-container__tab--selected'}
            >Tags</Tab>
            <Tab className={'settings-container__tab'}
                 selectedClassName={'settings-container__tab--selected'}
            >Billing</Tab>
            <Tab className={'settings-container__tab'}
                 selectedClassName={'settings-container__tab--selected'}
            >Integrations</Tab>
        </TabList>
        <div className="settings-container__tabs-content">
            <ScrollBlock style={{ minHeight: 0 }}>
                <form onSubmit={handleSubmit}>
                    <TabPanel>
                        <Field type={'text'} name={'lastName'} component={'input'}/>
                    </TabPanel>
                    <TabPanel>
                        Values settings
                    </TabPanel>
                    <TabPanel>
                        Tags settings
                    </TabPanel>
                    <TabPanel>
                        Billing settings
                    </TabPanel>
                    <TabPanel>
                        Integrations settings
                    </TabPanel>
                </form>
            </ScrollBlock>
        </div>
    </Tabs>


export default reduxForm({
    form: 'adminSettings'
})(SettingsForm)
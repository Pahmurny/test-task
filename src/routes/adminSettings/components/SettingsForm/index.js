import React from 'react'
import { connect } from 'react-redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { reduxForm } from 'redux-form'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import ProfileTab from 'routes/adminSettings/components/SettingsForm/ProfileTab/ProfileTab'
import TabContent from 'routes/adminSettings/components/SettingsForm/TabContent'
import {
    LIMIT_INVITES, NON_ADMINS, SELF_REGISTRATION,
    VALUES_FIELD,
} from 'routes/adminSettings/components/SettingsForm/inputNames'
import formSubmit from 'routes/adminSettings/actions/formSubmit'
import ValuesTab from 'routes/adminSettings/components/SettingsForm/ValuesTab/ValuesTab'

const SettingsForm = () => {
    return (<Tabs className={'settings-container__tabs-container'}>
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
                <form>
                    <TabPanel>
                        <TabContent>
                            <ProfileTab/>
                        </TabContent>
                    </TabPanel>
                    <TabPanel>
                        <ValuesTab/>
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
    </Tabs>)
}


const settingsForm = reduxForm({
    form: 'adminSettings',
    onSubmit: formSubmit
})(SettingsForm)

export default connect(({ feedbacks: { adminSettings } }) => ({
    initialValues: adminSettings,
}))(settingsForm)
import React from 'react'
import { connect } from 'react-redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { reduxForm } from 'redux-form'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import ProfileTab from 'routes/adminSettings/components/SettingsForm/ProfileTab/ProfileTab'
import TabContent from 'routes/adminSettings/components/SettingsForm/TabContent'
import formSubmit from 'routes/adminSettings/actions/formSubmit'
import ValuesTab from 'routes/adminSettings/components/SettingsForm/ValuesTab/ValuesTab'
import TagsTab from 'routes/adminSettings/components/SettingsForm/TagsTab/TagsTab'
import AccountTab from 'routes/adminSettings/components/SettingsForm/AccountTab/AccountTab'
import IntegrationsTab from 'routes/adminSettings/components/SettingsForm/IntegrationsTab/IntegrationsTab'

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
            >Account</Tab>
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
                        <TagsTab/>
                    </TabPanel>
                    <TabPanel>
                        <AccountTab/>
                    </TabPanel>
                    <TabPanel>
                        <IntegrationsTab/>
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
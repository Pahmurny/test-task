import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Content from 'components/Content/Content'
import FeedbackModule from 'routes/feedback/FeedbackModule'
import TeamModule from 'routes/team/TeamModule'
import PageHeader from 'components/Shared/PageHeader'
import LogoIcon from 'components/Icons/LogoIcon'
import 'reset-css/_reset.scss'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import { url } from 'helpers/url'
import CompanyModule from 'routes/company/CompanyModule'
import AdminModule from 'routes/admin/AdminModule'
import SettingsModule from 'routes/adminSettings/SettingsModule'
import Page from 'components/Content/Page'
import SidebarContainer from 'containers/SidebarContainer'
import './App.scss'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="application">
                    <PageHeader>
                        <LogoIcon style={{ marginTop: 5 }}/>
                        <HeaderMenu/>
                    </PageHeader>
                    <div className="bottom">
                        <SidebarContainer/>
                        <Content>
                            <Switch>
                                    <Route exact path={url.main()} component={FeedbackModule}/>
                                    <Route exact path={url.team()} component={TeamModule}/>
                                    <Route exact path={url.company()} component={CompanyModule}/>
                                    <Route exact path={url.admin()} component={AdminModule}/>
                                    <Route path={url.adminSettings()} component={SettingsModule}/>
                            </Switch>
                        </Content>
                    </div>
                </div>
            </Router>
        )
    }
}


export default App

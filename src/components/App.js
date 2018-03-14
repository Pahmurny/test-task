import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Sidebar from 'components/Sidebar/Sidebar'
import Content from 'components/Content/Content'
import FeedbackModule from 'routes/feedback/FeedbackModule'
import TeamModule from 'routes/team/TeamModule'
import PageHeader from 'components/Shared/PageHeader'
import LogoIcon from 'components/Icons/LogoIcon'
import 'reset-css/_reset.scss'
import './App.scss'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import { url } from 'helpers/url'
import SidebarNavigation from 'components/Sidebar/SidebarNavigation'
import CompanyModule from 'routes/company/CompanyModule'
import AdminModule from 'routes/admin/AdminModule'
import Page from 'components/Content/Page'


const sidebarNavigation2 = [
    {
        title: '1:1s',
        url: '#1:1',
    },
    {
        title: 'Feedback',
        url: url.main(),
    },
    {
        title: 'Goals',
        url: '#goals',
    },
    {
        title: 'Help',
        url: '#help',
    },
    {
        title: 'Documents',
        url: '#documents',
    },


]
const sidebarNavigation1 = [
    {
        title: '1:1s',
        url: '#1:1',
        badge: 2,
    },
    {
        title: 'Feedback',
        url: url.main(),
    },
    {
        title: 'Goals',
        url: '#goals',
    },
    {
        title: 'Help',
        url: '#help',
    },
    {
        title: 'Documents',
        url: '#documents',
    },]


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
                        <Sidebar className={'sidebar'}>
                            <SidebarNavigation items={sidebarNavigation1}/>
                            <SidebarNavigation items={sidebarNavigation2}/>
                        </Sidebar>
                        <Content>
                            <Switch>
                                <Page flex>
                                    <Route exact path={url.main()} component={FeedbackModule}/>
                                    <Route exact path={url.team()} component={TeamModule}/>
                                    <Route exact path={url.company()} component={CompanyModule}/>
                                    <Route path={url.admin()} component={AdminModule}/>
                                </Page>
                            </Switch>
                        </Content>
                    </div>
                </div>
            </Router>
        )
    }
}


export default App

import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Sidebar from 'components/Sidebar/Sidebar'
import Content from 'components/Content/Content'
import FeedbackModule from 'routes/feedback/FeedbackModule'
import PageHeader from 'components/Shared/PageHeader'
import LogoIcon from 'components/Icons/LogoIcon'
import 'reset-css/_reset.scss'
import './App.scss'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import { url } from 'helpers/url'


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
                        <Sidebar></Sidebar>
                        <Content>
                            <Switch>
                                <Route exact path={url.main()} component={FeedbackModule}/>
                                <Route path={url.admin()} component={()=><div>admin</div>}/>
                            </Switch>
                        </Content>
                    </div>
                </div>
            </Router>
        )
    }
}


export default App

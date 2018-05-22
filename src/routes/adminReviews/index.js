import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import setModuleView from 'actions/setModuleView'
import { MODULE_VIEW_ADMIN_REVIEWS } from 'routes/feedback/feedbackTypes'
import HalfPage from 'components/Shared/HalfPage'
import ScrollBlock from 'components/ScrollBlock/ScrollBlock'
import './adminReviews.scss'
import Templates from 'routes/adminReviews/components/Templates'
import EditIcon from 'components/Icons/EditIcon'


class AdminReviews extends Component {


  componentDidMount() {
    const { setModuleView } = this.props
    setModuleView(MODULE_VIEW_ADMIN_REVIEWS)
  }

  render() {

    return <HalfPage title={<Fragment>Reviews <EditIcon className="reviews__edit"/> </Fragment>}>
      <Tabs defaultIndex={1} className="reviews">
        <TabList className="reviews__tabs">
          <Tab disabled disabledClassName='disabled' className="reviews__tab" selectedClassName="selected">Cycles</Tab>
          <Tab className="reviews__tab" selectedClassName="selected">Templates</Tab>
        </TabList>
        <div className="reviews__content">
          <ScrollBlock style={{ minHeight: 0 }}>
            <TabPanel>
              Cycles
            </TabPanel>
            <TabPanel>
              <Templates/>
            </TabPanel>
          </ScrollBlock>
        </div>
      </Tabs>

    </HalfPage>
  }
}


export default connect(null, { setModuleView })(AdminReviews)
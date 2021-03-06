import React from 'react'
import {
  MODULE_VIEW_ADMIN,
  MODULE_VIEW_COMPANY,
  MODULE_VIEW_FEEDBACK,
  MODULE_VIEW_TEAM,
} from 'routes/feedback/feedbackTypes'
import Dropdown from 'components/Dropdown/Dropdown'
import EditIcon from 'components/Icons/EditIcon'
import store from 'store'
import showAdminSettingsAction from 'routes/feedback/actions/showAdminSettingsAction'
import MembersForm from 'routes/company/components/MembersForm/MembersForm'

export const dropdownViews = {
  [MODULE_VIEW_FEEDBACK]: ({ setFilterFeedbackType, filter }) => {
    const { feedbackTypes, feedbackType: ft } = filter
    return <Dropdown
      items={feedbackTypes}
      activeItem={ft}
      onClick={setFilterFeedbackType}
      style={{ minWidth: 180 }}
    />
  },
  [MODULE_VIEW_TEAM]: ({ setFilterFeedbackType, setTeamFeedbackType, filter, setFilterFeedbackTo }) => {
    const { teamTypes, teamType, feedbackToItems, feedbackTo } = filter
    return <React.Fragment>
      <Dropdown
        style={{ minWidth: 200 }}
        items={feedbackToItems}
        activeItem={feedbackTo}
        onClick={setFilterFeedbackTo}
      />
      <Dropdown
        style={{ marginLeft: 10, minWidth: 190 }}
        activeItem={teamType}
        onClick={setTeamFeedbackType}
        items={teamTypes}
      />
    </React.Fragment>
  },
  [MODULE_VIEW_COMPANY]: () => <MembersForm/>,
}


export const titles = {
  [MODULE_VIEW_FEEDBACK]: 'Feedback',
  [MODULE_VIEW_TEAM]: 'Feedback',
  [MODULE_VIEW_COMPANY]: 'Public Feedback',
  [MODULE_VIEW_ADMIN]: <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> Feedback <EditIcon
    style={{ marginLeft: 12 }}
    onClick={() => store.dispatch(showAdminSettingsAction())}
  />
  </div>,

}
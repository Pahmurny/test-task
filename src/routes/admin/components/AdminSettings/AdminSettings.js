import React from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'
import Checkbox from 'components/Form/Checkbox/Checkbox'
import ToggleField from 'components/Form/Toggle/ToggleField'
import storeAdminSettings from 'routes/feedback/actions/storeAdminSettings'
import './adminsettings.scss'

const AdminSettings = (adminSettings) => {

  const {
    allowManagers,
    enableAnonymous,
    aAnonymous,
    storeAdminSettings,
  } = adminSettings


  return (<div className={cn('admin-settings', { 'without-padding': enableAnonymous })}>
      <Checkbox
        checked={allowManagers}
        onClick={() => storeAdminSettings('adminSettings', { ...adminSettings, allowManagers: !allowManagers })}
      >Allow managers to view private feedback that is given to their direct
        reports.</Checkbox>
      <Checkbox
        checked={enableAnonymous}
        onClick={() => storeAdminSettings('adminSettings', { ...adminSettings, enableAnonymous: !enableAnonymous })}
      >Enable anonymity as an option.</Checkbox>
      {enableAnonymous && <ToggleField
        leftLabel={'With Name'}
        left
        rightLabel={'Anonymous'}
        label={'Default option:'}
        onClick={() => storeAdminSettings('adminSettings', { ...adminSettings, aAnonymous: !aAnonymous })}
        toggle={!aAnonymous}
      />}
    </div>
  )
}


export default connect(({ feedbacks: { adminSettings } }) => ({
  ...adminSettings,
}), { storeAdminSettings })(AdminSettings)



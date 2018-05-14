import React from 'react'
import './companyinfo.scss'

const CompanyInfo = ({ logo, name, address }) => <div className="company-info">
  <img src={logo} className="company-info__logo"/>
  <div className="company-info__address">
    <div className="company-info__address-name">{name}</div>
    <div
      className="company-info__address-venue"
      dangerouslySetInnerHTML={{ __html: address.join('<br/>') }}
    />
  </div>
</div>

export default CompanyInfo
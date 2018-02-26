import React from 'react'
import { ScaleLoader } from 'react-spinners'
import Page from 'components/Content/Page'

const PageLoader = ({ loader }) => <Page flex style={{
    alignItems: 'center',
    justifyContent: 'center',
}}>
    {loader}
</Page>


PageLoader.defaultProps = {
    loader: <ScaleLoader/>,
}


export default PageLoader
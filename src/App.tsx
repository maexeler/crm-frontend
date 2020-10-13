import React from 'react'
import AppLayout from './component/application/AppLayout'
import CrmHeader from './component/crm/CrmHeader'
import CrmPage from './component/crm/CrmPage'
import AboutPage from './component/about/AboutPage'
import PageNotFoundPage from './component/notfound/PageNotFoundPage'

// import { useCrmInitDataHook } from './model/crm_data_init_hook'
import { useCrmInitDataHook } from './model/crm_data_init_hook'

import { useLocation } from 'react-router-dom'

const CrmApp: React.FC = () => {
  useCrmInitDataHook()

  let body = <PageNotFoundPage />
  switch (useLocation().pathname) {
    case '/':      { body = <CrmPage />;  break }
    case '/crm':   { body = <CrmPage />;  break }
    case '/about': { body = <AboutPage />; break }
  }
  return (
    <AppLayout 
      header = {<CrmHeader />}
      body = {body}
    />
    );
}

export default CrmApp

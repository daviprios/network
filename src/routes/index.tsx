import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom'

import { paths } from '$utils/paths'

import FeedLayout from '$layouts/FeedLayout'

import Feed from '$pages/Feed'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={paths.home} element={<FeedLayout/>}>
          <Route index element={<Navigate to={paths.feed}/>}/>
          <Route path={paths.feed} element={<Feed/>}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
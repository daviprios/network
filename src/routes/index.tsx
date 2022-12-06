import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { paths } from '$utils/paths'

import FeedLayout from '$layouts/FeedLayout'

import Home from '$pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={paths.home} element={<FeedLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
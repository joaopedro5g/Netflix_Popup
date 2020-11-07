import { AnimatePresence } from 'framer-motion';
import React from 'react';

import {
  BrowserRouter,
  Switch,
  useParams,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

const RouteContainer = () => {
  const { id } = useParams<any>();
  return (
    <>
      <Home />
      <AnimatePresence>
        { id &&  <Details id={id} />}
      </AnimatePresence>
    </>
  )
}

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/:id", "/"]} component={RouteContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
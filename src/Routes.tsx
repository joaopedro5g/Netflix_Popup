import React, { useLayoutEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  BrowserRouter,
  Switch,
  useParams,
  Route,
  useHistory
} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';


const RouteContainer = () => {
  const { id } = useParams<any>();
  const history = useHistory();
  useLayoutEffect(() => {
    window.addEventListener('keyup', (key) => {
      if(key.code === 'Escape') {
        history.push('/');
      }
    })
  });
  return (
    <>
      <Home />
      <AnimatePresence>
        { id &&  <Details id={`popup-${id}`} />}
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
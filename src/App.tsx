import React from 'react';

import { AnimateSharedLayout } from 'framer-motion';

import Routes from './Routes';

function App() {
  return (
    <AnimateSharedLayout type="crossfade">
      <Routes />
    </AnimateSharedLayout>
  );
}

export default App;

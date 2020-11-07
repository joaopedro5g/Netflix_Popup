import React from 'react';

import {
  useHistory,
  useLocation
} from 'react-router-dom';

import {
  Container
} from './style';

import Card from '../../components/Card';

const Home: React.FC = () => {
  const history = useHistory();
  const loc = useLocation();
  return (
    <Container style={{
      overflowY: loc.pathname !== '/' ? 'hidden' : 'auto'
    }}>
      <div onClick={() => history.push('/21312')}>
        <Card id="21312" />
      </div>
    </Container>
  );
}

export default Home;
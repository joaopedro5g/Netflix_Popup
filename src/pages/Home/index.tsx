import React, { useEffect } from 'react';

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
  useEffect(() => {
    if(loc.pathname !== '/') {
      return document.querySelector('body')?.classList.add('hidden');
    }
    document.querySelector('body')?.classList.remove('hidden');
  }, [loc.pathname]);
  return (
    <Container style={{
      overflowY: loc.pathname !== '/' ? 'hidden' : 'auto'
    }}>
      <div onClick={() => history.push('/21312')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-21312" />
      </div>
      <div onClick={() => history.push('/31231')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-31231" />
      </div>
      <div onClick={() => history.push('/fada')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-fada" />
      </div>
      <div onClick={() => history.push('/dfedf')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-dfedf" />
      </div>
      <div onClick={() => history.push('/vfdger344')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-vfdger344" />
      </div>
      <div onClick={() => history.push('/3rt23t')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-3rt23t" />
      </div>
      <div onClick={() => history.push('/sffad')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-sffad" />
      </div>
      <div onClick={() => history.push('/f')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-f" />
      </div>
      <div onClick={() => history.push('/chat')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-chat" />
      </div>
      <div onClick={() => history.push('/zeca')} style={{marginLeft:10, marginRight: 10}}>
        <Card id="popup-zeca" />
      </div>
    </Container>
  );
}

export default Home;
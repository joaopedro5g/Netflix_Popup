import React from 'react';

import {
  Container,
} from './style';

interface Props {
  id: string;
}

const Home: React.FC<Props> = ({ id }) => {
  return (
    <Container layoutId={id} />
  );
}

export default Home;
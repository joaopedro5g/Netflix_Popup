import React, { useCallback, useRef } from 'react';

import {
  useHistory
} from 'react-router-dom';

import { 
  Container,
  Content,
  VideoContainer,
  ButtonClose,
  VideoInformation,
  VideoComponent,
} from './style';

import {
  AiOutlineClose
} from 'react-icons/ai';

interface Props {
  id: string;
}

const Details: React.FC<Props> = ({ id }) => {
  const video = useRef<HTMLVideoElement | null>({} as HTMLVideoElement);
  const history = useHistory();
  const onClick = useCallback(() => {
    setTimeout(() => video.current?.play(), 500);
  }, []);
  return (
    <Container onClick={onClick}>
      <Content layoutId={id}>
        <VideoContainer>
          <VideoComponent
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls={false}
            ref={video}
          />
          <VideoInformation layoutId={id} playedVideo={false}>
          </VideoInformation>
          <ButtonClose onClick={() => history.push('/')}>
            <AiOutlineClose />
          </ButtonClose>
        </VideoContainer>
      </Content>
    </Container>
  );
}

export default Details;
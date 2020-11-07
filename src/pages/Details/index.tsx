import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

import {
  useHistory
} from 'react-router-dom';

import { 
  Container,
  Content,
  VideoContainer,
  ButtonClose,
  VideoInformation,
  TitleImage,
  VideoComponent,
  OptionOnMovie,
  OptionCircle,
  DetailsMovie
} from './style';

import Title from '../../assets/title-movie.png'

import {
  AiOutlineClose,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlinePlus
} from 'react-icons/ai';

import {
  BsPlayFill,
  BsVolumeMuteFill,
  BsFillVolumeUpFill
} from 'react-icons/bs'

interface Props {
  id: string;
}

const Details: React.FC<Props> = ({ id }) => {
  const video = useRef<HTMLVideoElement | null>({} as HTMLVideoElement);
  const history = useHistory();
  const [mute,setMute] = useState(true);
  const [volume,setVolume] = useState(1);
  useEffect(() => {
    setTimeout(() => video.current?.play(), 5000);
  }, []);
  useLayoutEffect(() => {
    video.current?.addEventListener('ended', () => {
      video.current?.load();
      setMute(true);
    })
  });
  function handleMute() {
    if(!video.current?.muted) {
      const time = setInterval(() => {
        if(video.current) {
          if(video.current?.volume <= 0.10000000000000014) {
            setMute(true);
            clearInterval(time);
          }
          video.current.volume = video.current.volume - 0.1;
        }
      }, 70);
    } else {
      video.current.volume = 1;
      setMute(false);
    }
  }
  return (
    <Container>
      <Content layoutId={id}>
        <VideoContainer>
          <VideoComponent
            src="https://vod-progressive.akamaized.net/exp=1604784447~acl=%2A%2F676625753.mp4%2A~hmac=90db2a8f206e2b9c19ead9789522cc3fa4bc4d57a035876f537a0e944130b403/vimeo-prod-skyfire-std-us/01/68/8/200341149/676625753.mp4?filename=Smurfs%3A+The+Lost+Village+-+International+Trailer+%28115738%29.mp4"
            controls={false}
            poster="https://www.filmofilia.com/wp-content/uploads/2011/05/the_smurfs_8.jpg"
            ref={video}
            muted={mute}
          />
          <VideoInformation layoutId={id} playedVideo={false}>
            <TitleImage src={Title} />
            <OptionOnMovie>
              <button>
                <BsPlayFill />
                <span>Assistir</span>
              </button>
              <OptionCircle>
                <AiOutlinePlus />
              </OptionCircle>
              <OptionCircle>
                <AiOutlineLike />
              </OptionCircle>
              <OptionCircle>
                <AiOutlineDislike />
              </OptionCircle>
              <OptionCircle vol onClick={handleMute} style={{right: '10px', position: 'absolute'}}>
                {
                  mute ? <BsVolumeMuteFill /> : <BsFillVolumeUpFill />
                }
              </OptionCircle>
            </OptionOnMovie>
          </VideoInformation>
          <ButtonClose onClick={() => history.push('/')}>
            <AiOutlineClose size={26} />
          </ButtonClose>
        </VideoContainer>
        <DetailsMovie>

        </DetailsMovie>
      </Content>
    </Container>
  );
}

export default Details;
import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content:center;
  align-items:center;
  overflow-y: auto;
  padding: 30px 0 0;
`;

export const Content = styled(motion.div)`
  width: 850px;
  height: 100%;
  background: #1f1f1f;
  border-radius: 10px;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
`;

export const ButtonClose = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 5px;
  background: #000;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  color: #fff;
  cursor: pointer;
  z-index: 10;
`;

export const VideoComponent = styled.video`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: absolute;
  object-fit: cover;
  z-index: 2;
  transition: 3s;
`;

export const VideoInformation = styled<any>('div')`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 4;
`;

export const TitleImage = styled.img`
  width: 300px;
  height: 100px;
  position:absolute;
  bottom: 100px;
`;

export const OptionOnMovie = styled.div`
  display:flex;
  align-items:center;
  position: absolute;
  bottom: 0;
  padding: 0 25px;
  width: 100%;
  height: 120px;
  align-items:center;
  background: linear-gradient(to bottom, transparent,transparent, rgba(31, 31, 31,.2), rgba(31, 31, 31,.4),rgb(31, 31, 31));
  button {
    margin-top: 20px;
    margin-right: 10px;
    background: #fff;
    width: 130px;
    height: 40px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    display: flex;
    justify-content: center;
    align-items:center;
    span {
      font-weight: 700;
      font-size: 16px;
      margin-left: 5px;
    }
    svg {
      font-size: 22px;
    }
  }
`;

export const OptionCircle = styled<any>('div')`
  background: rgba(46,46,46,.6);
  margin-right: 10px;
  margin-top: 20px;
  border: 2px solid #ccc;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  ${props => props.vol && css`
    opacity: .5;
    transition: .4s;
    :hover {
      opacity: 1;
      transition: .4s;
    }
  `}
  :hover {
    border: 2px solid #fff;
    opacity: 1;
  }
`;

export const DetailsMovie = styled.div`
  width: 100%;
  height: 100%;
  background: #1f1f1f;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 30px;
  padding: 10px;
`;

export const MovieEspc = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
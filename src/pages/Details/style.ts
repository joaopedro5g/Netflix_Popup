import styled from 'styled-components';

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
  padding: 20px 0;
`;

export const Content = styled(motion.div)`
  margin-top: 20px;
  width: 600px;
  min-height: 100vh;
  background: #1f1f1f;
  border-radius: 10px;
  scale: .5;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 400px;
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
`;

export const VideoInformation = styled<any>('div')`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 4;
  background: linear-gradient(to bottom, transparent,transparent,transparent, rgba(31, 31, 31,.4), rgba(31, 31, 31,.2),rgb(31, 31, 31));
`;
